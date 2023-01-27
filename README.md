# SpaceX Launches

This project utilizes the [SpaceX API](https://api.spacexdata.com/v3/) to display information about past and upcoming launches by SpaceX. It is build with React, Redux Toolkit Query and Tailwind CSS.

## Getting Started

1. Clone the repository to your local machine

```bash
git clone https://github.com/itsramzan/spacex-launches.git
```

2. Install the dependencies

```bash
npm install
```

3. Start the development server

```bash
npm start
```

The project will now be running on
http://localhost:3000

## Live Link

Site hosted on netlify -
[SpaceX Launches](https://spacex-launch-bd.netlify.app/)

## Features

1. Display a list of past and upcoming launches
2. View detailed information about individual launches
3. Search functionality for launches
4. Filter by launches status, upcoming status & date range
5. Responsive design for different screen sizes

## Technologies Used

1. React
2. React Router DOM
3. Redux Toolkit Query
4. Tailwind CSS
5. [SpaceX API](https://api.spacexdata.com/v3/)

## Folder Structure

```bash
.
├── app
│   └── store.js
├── App.jsx
├── assets
│   └── images
│       └── noImage.jpg
├── components
│   ├── Launch
│   │   ├── DetailsItem.jsx
│   │   └── LaunchDetails.jsx
│   ├── Launches
│   │   ├── Filter.jsx
│   │   ├── LaunchesGridItem.jsx
│   │   ├── LaunchesGrid.jsx
│   │   └── Search.jsx
│   ├── Layout.jsx
│   ├── Shared
│   │   ├── Footer.jsx
│   │   └── Navbar.jsx
│   └── UI
│       ├── Error.jsx
│       ├── Heading.jsx
│       ├── Loading.jsx
│       └── ScrollTop.jsx
├── features
│   ├── api
│   │   └── apiSlice.js
│   ├── filter
│   │   └── filterSlice.js
│   ├── launch
│   │   └── launchApi.js
│   └── search
│       └── searchSlice.js
├── index.css
├── index.js
├── pages
│   ├── Home.jsx
│   ├── Launches.jsx
│   ├── Launch.jsx
│   └── NotFound.jsx
└── utils
    ├── debounce.js
    └── scrollTop.js
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
