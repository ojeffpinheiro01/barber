import React from "react";

export const JsonBarbers = {
  error: "",
  data: [
    {
      id: 4,
      name: "Bonieky Lacerda",
      avatar: "https://api.b7web.com.br/devbarber/media/avatars/3.png",
      stars: 2.3,
    },
    {
      id: 8,
      name: "Ronaldo Sousa",
      avatar: "https://api.b7web.com.br/devbarber/media/avatars/1.png",
      stars: 2.1,
    },
    {
      id: 11,
      name: "Gabriel Alvaro",
      avatar: "https://api.b7web.com.br/devbarber/media/avatars/2.png",
      stars: 2.3,
    },
    {
      id: 6,
      name: "Amanda Lacerda",
      avatar: "https://api.b7web.com.br/devbarber/media/avatars/4.png",
      stars: 3.6,
    },
    {
      id: 5,
      name: "Bonieky Alvaro",
      avatar: "https://api.b7web.com.br/devbarber/media/avatars/4.png",
      stars: 4.8,
    },
    {
      id: 12,
      name: "Amanda Diniz",
      avatar: "https://api.b7web.com.br/devbarber/media/avatars/4.png",
      stars: 3.5,
    },
    {
      id: 3,
      name: "Pedro Gomes",
      avatar: "https://api.b7web.com.br/devbarber/media/avatars/1.png",
      stars: 3.4,
    },
    {
      id: 9,
      name: "Gabriel Lacerda",
      avatar: "https://api.b7web.com.br/devbarber/media/avatars/3.png",
      stars: 2.5,
    },
    {
      id: 1,
      name: "Paulo Silva",
      avatar: "https://api.b7web.com.br/devbarber/media/avatars/3.png",
      stars: 4.8,
    },
    {
      id: 2,
      name: "Leticia Silva",
      avatar: "https://api.b7web.com.br/devbarber/media/avatars/4.png",
      stars: 2,
    },
    {
      id: 13,
      name: "Leticia Lacerda",
      avatar: "https://api.b7web.com.br/devbarber/media/avatars/3.png",
      stars: 3.4,
    },
    {
      id: 14,
      name: "Amanda Lacerda",
      avatar: "https://api.b7web.com.br/devbarber/media/avatars/4.png",
      stars: 2.4,
    },
    {
      id: 7,
      name: "Ronaldo Lacerda",
      avatar: "https://api.b7web.com.br/devbarber/media/avatars/1.png",
      stars: 4.7,
    },
    {
      id: 15,
      name: "Gabriel Silva",
      avatar: "https://api.b7web.com.br/devbarber/media/avatars/2.png",
      stars: 4.3,
    },
    {
      id: 10,
      name: "Ronaldo Silva",
      avatar: "https://api.b7web.com.br/devbarber/media/avatars/3.png",
      stars: 2.8,
    },
  ],
  loc: "Salvador",
};

export const JsonBarberId = {
  error: "",
  data: {
    id: 4,
    name: "Bonieky Lacerda",
    avatar: "https://api.b7web.com.br/devbarber/media/avatars/3.png",
    stars: 2.3,
    favorited: false,
    photos: [
      {
        id: 13,
        id_barber: 4,
        url: "https://api.b7web.com.br/devbarber/media/uploads/5.png",
      },
      {
        id: 14,
        id_barber: 4,
        url: "https://api.b7web.com.br/devbarber/media/uploads/1.png",
      },
      {
        id: 15,
        id_barber: 4,
        url: "https://api.b7web.com.br/devbarber/media/uploads/2.png",
      },
      {
        id: 16,
        id_barber: 4,
        url: "https://api.b7web.com.br/devbarber/media/uploads/1.png",
      },
    ],
    services: [
      {
        id: 13,
        id_barber: 4,
        name: "Corte de Unha",
        price: 88.4,
      },
      {
        id: 14,
        id_barber: 4,
        name: "Aparação de Unha",
        price: 37.52,
      },
      {
        id: 15,
        id_barber: 4,
        name: "Enfeite de Pernas",
        price: 98.55,
      },
      {
        id: 16,
        id_barber: 4,
        name: "Corte de Unha",
        price: 9.55,
      },
    ],
    testimonials: [
      {
        id: 10,
        id_barber: 4,
        name: "Paulo Gomes",
        rate: 2.6,
        body: "Aliquam dapibus id dolor non auctor. Morbi vehicula nec ex.",
      },
      {
        id: 11,
        id_barber: 4,
        name: "Leticia Sousa",
        rate: 4.2,
        body:
          "Maecenas ullamcorper mi a justo egestas ultrices quis eget lacus.",
      },
      {
        id: 12,
        id_barber: 4,
        name: "Leticia Alvaro",
        rate: 4.8,
        body:
          "Nam luctus accumsan enim, a finibus sapien rhoncus fermentum. Praesent.",
      },
    ],
    available: [
      {
        date: "2020-08-01",
        hours: ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00"],
      },
      {
        date: "2020-08-02",
        hours: ["09:00", "10:00", "10:30", "11:00", "11:30", "12:00"],
      },
      {
        date: "2020-08-04",
        hours: ["09:00", "09:30", "10:00", "11:00", "11:30", "12:00"],
      },
      {
        date: "2020-08-05",
        hours: ["09:00", "09:30", "10:30", "11:00", "11:30", "12:00"],
      },
      {
        date: "2020-08-07",
        hours: ["09:00", "10:00", "10:30", "11:00", "11:30", "12:00"],
      },
      {
        date: "2020-09-02",
        hours: ["09:00", "09:30", "10:30", "11:00", "11:30", "12:00"],
      },
      {
        date: "2020-09-04",
        hours: ["09:00", "10:00", "10:30", "11:00", "11:30", "12:00"],
      },
      {
        date: "2020-09-06",
        hours: ["09:30", "10:00", "10:30", "11:00", "11:30", "12:00"],
      },
      {
        date: "2020-09-07",
        hours: ["09:00", "09:30", "10:30", "11:00", "11:30", "12:00"],
      },
    ],
  },
};

export const Appointments = {
  error: "",
  data: [
    {
      avatar: 'https://api.b7web.com.br/devbarber/media/avatars/3.png',
      name: 'Carlos Fábio R Conceição',
      serviceName: "Corte Masculinio",
      servicePrice: 29.90,
      scheduleDate: '25/08/2020',
      scheduleTime: '13:00'
    }
  ]
};

export const Users = {
  error: "",
  data: [
    {
      id: 1,
      name: 'Admin',
      avatar:"https:\/\/api.b7web.com.br\/devbarber\/media\/avatars\/default.png",
      email: "admin@admin.com",
      token:"admin_eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYXBpLmI3d2ViLmNvbS5iclwvZGV2YmFyYmVyXC9hcGlcL2F1dGhcL2xvZ2luIiwiaWF0IjoxNjAxNzc4MzM0LCJleHAiOjE2MDE3ODE5MzQsIm5iZiI6MTYwMTc3ODMzNCwianRpIjoiRGFGZG1QcDJVYnpxWWxoVCIsInN1YiI6NCwicHJ2IjoiODdlMGFmMWVmOWZkMTU4MTJmZGVjOTcxNTNhMTRlMGIwNDc1NDZhYSJ9.CqXZ6Z22PC87mTABD1htMgGLfc8MKdAqIZ4eQ3TdWo8",
      type: 'A'
    },
    {
      id: 2,
      name: 'User',
      avatar:"https:\/\/api.b7web.com.br\/devbarber\/media\/avatars\/default.png",
      email: "user@user.com",
      token:"user_eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYXBpLmI3d2ViLmNvbS5iclwvZGV2YmFyYmVyXC9hcGlcL2F1dGhcL2xvZ2luIiwiaWF0IjoxNjAxNzc4MzM0LCJleHAiOjE2MDE3ODE5MzQsIm5iZiI6MTYwMTc3ODMzNCwianRpIjoiRGFGZG1QcDJVYnpxWWxoVCIsInN1YiI6NCwicHJ2IjoiODdlMGFmMWVmOWZkMTU4MTJmZGVjOTcxNTNhMTRlMGIwNDc1NDZhYSJ9.CqXZ6Z22PC87mTABD1htMgGLfc8MKdAqIZ4eQ3TdWo8",
      type: 'U'
    },
    {
      id: 3,
      name: 'Establishment',
      avatar:"https:\/\/api.b7web.com.br\/devbarber\/media\/avatars\/default.png",
      email: "establishment@establishment.com",
      token:"establishment_eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYXBpLmI3d2ViLmNvbS5iclwvZGV2YmFyYmVyXC9hcGlcL2F1dGhcL2xvZ2luIiwiaWF0IjoxNjAxNzc4MzM0LCJleHAiOjE2MDE3ODE5MzQsIm5iZiI6MTYwMTc3ODMzNCwianRpIjoiRGFGZG1QcDJVYnpxWWxoVCIsInN1YiI6NCwicHJ2IjoiODdlMGFmMWVmOWZkMTU4MTJmZGVjOTcxNTNhMTRlMGIwNDc1NDZhYSJ9.CqXZ6Z22PC87mTABD1htMgGLfc8MKdAqIZ4eQ3TdWo8",
      type: 'E'
    }
  ]
};
