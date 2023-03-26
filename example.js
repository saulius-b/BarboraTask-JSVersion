//Example result array with one object (need one of these objects for every customer ID)

[
  {
    "6fbe024f-2316-4265-a6e8-d65a837e308a": {
      customer: {
        id: "6fbe024f-2316-4265-a6e8-d65a837e308a",
        firstName: "Tatyana",
        lastName: "Johnson",
      },
      items: [
        {
          customerId: "6fbe024f-2316-4265-a6e8-d65a837e308a",
          productId: "f761e31f-847e-49e8-ab2c-e5a5385f2772",
          quantity: 2,
          createdAt: "2021-02-15T16:44:28.712Z",
          id: "f761e31f-847e-49e8-ab2c-e5a5385f2772",
          product: "Computer",
          price: "969.00",
        },
        {
          customerId: "6fbe024f-2316-4265-a6e8-d65a837e308a",
          productId: "64d91f51-0179-463a-8297-ae1c1aa86f18",
          quantity: 1,
          createdAt: "2021-08-21T21:13:54.672Z",
          id: "64d91f51-0179-463a-8297-ae1c1aa86f18",
          product: "Pants",
          price: "643.00",
        },
        {
          customerId: "6fbe024f-2316-4265-a6e8-d65a837e308a",
          productId: "5bd7cc9a-b4e8-4db8-880b-46c8e7ad2dc6",
          quantity: 4,
          createdAt: "2021-10-21T09:06:48.820Z",
          id: "5bd7cc9a-b4e8-4db8-880b-46c8e7ad2dc6",
          product: "Hat",
          price: "418.00",
        },
      ],
      total: 4253,
      byDay: {
        "2021-02-15": 1938,
        "2021-08-21": 643,
        "2021-10-21": 1672,
      },
    },
  },
];
