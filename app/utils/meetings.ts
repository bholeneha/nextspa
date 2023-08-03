interface Meeting {
    id: number;
    serviceType: string;
    location: string;
    spaSpecialist: string;
    date: string;
    time: string;
  }
  
  const meetings: Meeting[] = [
    {
      id: 1,
      serviceType: 'Blowout',
      location: 'Malibu Spa Retreat',
      spaSpecialist: 'Barbie',
      date: '2023-07-20',
      time: '14:00',
    },
    {
      id: 2,
      serviceType: 'Mani/Pedi',
      location: 'Dreamhouse Spa Retreat',
      spaSpecialist: 'Stacie',
      date: '2023-07-22',
      time: '10:30',
    },
    {
      id: 3,
      serviceType: 'Massage',
      location: 'Malibu Spa Retreat',
      spaSpecialist: 'Christie',
      date: '2023-07-25',
      time: '16:00',
    },
    {
      id: 4,
      serviceType: 'Blowout',
      location: 'Malibu Spa Retreat',
      spaSpecialist: 'Ken',
      date: '2023-07-27',
      time: '12:00',
    },
    {
      id: 5,
      serviceType: 'Mani/Pedi',
      location: 'Dreamhouse Spa Retreat',
      spaSpecialist: 'Chelsea',
      date: '2023-08-01',
      time: '15:00',
    },
    {
      id: 6,
      serviceType: 'Massage',
      location: 'Malibu Spa Retreat',
      spaSpecialist: 'Skipper',
      date: '2023-08-03',
      time: '14:30',
    },
    {
      id: 7,
      serviceType: 'Blowout',
      location: 'Dreamhouse Spa Retreat',
      spaSpecialist: 'Barbie',
      date: '2023-08-07',
      time: '10:00',
    },
    {
      id: 8,
      serviceType: 'Mani/Pedi',
      location: 'Malibu Spa Retreat',
      spaSpecialist: 'Stacie',
      date: '2023-08-10',
      time: '12:30',
    },
    {
      id: 9,
      serviceType: 'Massage',
      location: 'Dreamhouse Spa Retreat',
      spaSpecialist: 'Christie',
      date: '2023-08-15',
      time: '17:30',
    },
    {
      id: 10,
      serviceType: 'Blowout',
      location: 'Malibu Spa Retreat',
      spaSpecialist: 'Ken',
      date: '2023-08-20',
      time: '13:00',
    },
  ];
  
  export default meetings;
  