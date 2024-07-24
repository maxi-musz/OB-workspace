import React from "react";
import Link from "next/link";

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  buttonLabel: string;
  buttonLink: string;
  note?: string;
  recommended?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  description,
  features,
  buttonLabel,
  buttonLink,
  note,
  recommended = false,
}) => {
  return (
    <div
      className={`border rounded-lg p-6 shadow-lg ${
        recommended ? "border-green-500" : "border-gray-300"
      }`}
    >
      {recommended && (
        <div className="bg-green-500 text-white text-center p-1 rounded-t-lg">
          Recommended
        </div>
      )}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-2xl font-bold mb-2">{price}</p>
      <p className="mb-4">{description}</p>
      <ul className="mb-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center mb-2">
            <span className="text-green-500 mr-2">✔</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Link
        href={buttonLink}
        className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 text-center block"
      >
        {buttonLabel}
      </Link>
      {note && <p className="text-xs mt-2 text-gray-500">{note}</p>}
    </div>
  );
};

export default PricingCard;
