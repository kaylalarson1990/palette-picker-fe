export const fetchAllProjects = () => {
  return fetch(process.env.REACT_APP_BACKEND_URL + "/api/v1/projects")
    .then(response => {
      if (!response.ok) {
        throw new Error(response);
      } else {
        return response.json();
      }
    })
    .catch(error => Error("Error fetching projects"));
};

export const fetchAllPalettes = () => {
  return fetch(process.env.REACT_APP_BACKEND_URL + "/api/v1/palettes")
    .then(response => {
      if (!response.ok) {
        throw new Error(response);
      } else {
        return response.json();
      }
    })
    .catch(error => Error("Error fetching palettes"));
};

export const postProject = project => {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(project)
  };
  return fetch(process.env.REACT_APP_BACKEND_URL + "/api/v1/projects", options)
    .then(response => {
      if (!response.ok) {
        throw new Error(response);
      } else {
        return response.json();
      }
    })
    .catch(error => Error("Error adding project"));
};

export const postPalette = palette => {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(palette)
  };
  return fetch(process.env.REACT_APP_BACKEND_URL + "/api/v1/palettes", options)
    .then(response => {
      if (!response.ok) {
        throw new Error(response);
      } else {
        return response.json();
      }
    })
    .catch(error => Error("Error adding palette"));
};

export const patchProject = project => {
  const options = {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(project)
  };
  return fetch(process.env.REACT_APP_BACKEND_URL + "/api/v1/projects", options)
    .then(response => {
      if (!response.ok) {
        throw new Error(response);
      } else {
        return response.json();
      }
    })
    .catch(error => Error("Error adding project"));
};

export const patchPalette = palette => {
  const options = {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(palette)
  };
  return fetch(process.env.REACT_APP_BACKEND_URL + "/api/v1/palettes", options)
    .then(response => {
      if (!response.ok) {
        throw new Error(response);
      } else {
        return response.json();
      }
    })
    .catch(error => Error("Error adding palette"));
};

export const deleteProject = project => {
  return fetch(
    process.env.REACT_APP_BACKEND_URL + `/api/v1/projects/${project.id}`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(response);
      } else {
        return response.json();
      }
    })
    .catch(error => Error("Error fetching projects"));
};

export const deletePalette = palette => {
  return fetch(
    process.env.REACT_APP_BACKEND_URL + `/api/v1/palettes/${palette.id}`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(response);
      } else {
        return response.json();
      }
    })
    .catch(error => Error("Error fetching palettes"));
};
