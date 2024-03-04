# Next.js Sorting Algorithm Visualizer

Welcome to the Next.js Sorting Algorithm Visualizer project! This project provides a web-based tool for visualizing various sorting algorithms.

## Features

- Visualize popular sorting algorithms such as:
  - Bubble Sort
  - Selection Sort
  - Insertion Sort
  - Merge Sort
  - Quick Sort
  - Shell Sort
- User-friendly interface for interacting with the visualization.
- Responsive design, compatible with various screen sizes.

## Getting Started

To get started with the sorting algorithm visualizer, follow these steps:

### Prerequisites

- Node.js and npm installed on your system.
- Docker installed if you want to run the application using Docker.

### Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/your-username/nextjs-sorting-visualizer.git
   ```

2. Navigate to the project directory:

   ```bash
   cd nextjs-sorting-visualizer
   ```

3. Install dependencies:

   ```bash
   pnpm install
   ```

### Usage

1. Start the development server:

   ```bash
   npm run dev
   ```

   This will start the Next.js development server and you can access the application at [http://localhost:3000](http://localhost:3000) in your web browser.

2. Explore different sorting algorithms and visualize how they work!

### Running with Docker

If you prefer to run the application using Docker, follow these steps:

1. Build the Docker image:

   ```bash
   docker build -t nextjs-sorting-visualizer .
   ```

2. Run the Docker container:

   ```bash
   docker run -d -p 3000:3000 nextjs-sorting-visualizer
   ```

   The application will be accessible at [http://localhost:3000](http://localhost:3000) in your web browser.

## Contributing

Contributions are welcome! Feel free to open issues or pull requests to suggest improvements, report bugs, or add new features.