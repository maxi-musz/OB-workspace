// data/amenitiesData.ts
export interface Amenity {
    image: string;
    title: string;
    description: string;
  }
  
  const amenitiesData: Amenity[] = [
    {
      image: '/amenities/High-speed-internet.jpg',
      title: 'High-Speed Starlink Internet Access',
      description: 'Enjoy fast and reliable internet connectivity for your work needs.',
    },
    {
      image: '/amenities/real-power-supply.jpg',
      title: '24/7 Power supply',
      description: '24/7 uninterrupted power supply has been made available to power your devices without interruption.',
    },
    {
      image: '/amenities/perfect-lighting.jpg',
      title: 'Perfectly Lighted',
      description: 'Maximizing complete lighting in the workspace to create a comfortable and energizing environment..',
    },
    {
      image: '/amenities/green-space.jpg',
      title: 'Green Spaces',
      description: 'Integrating indoor plants or outdoor green areas to improve air quality and create a relaxing atmosphere.',
    },
    {
      image: '/amenities/climate-control.jpg',
      title: 'Climate Control',
      description: 'Relax in ergonomic chairs and spacious desks designed for your comfort.',
    },
    {
      image: '/amenities/networking.jpg',
      title: 'Networking Opportunities',
      description: 'Facilitating opportunities for users to connect with other professionals in the workspace through networking events or online platforms.',
    },
    // Add more amenities as needed
  ];
  
  export default amenitiesData;
  