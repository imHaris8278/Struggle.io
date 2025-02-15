let server;

try {
  fetch("http://localhost:5000/api")
    .then((response) => {
      if (response.ok) {
        server = "http://localhost:5000/api";
      } else {
        throw new Error("Local server not available");
      }
    })
    .catch(() => {
      server = "https://struggle-mtryrc8jp-haris-baigs-projects.vercel.app";
    });
} catch (error) {
  server = "https://struggle-mtryrc8jp-haris-baigs-projects.vercel.app";
}

export { server };
