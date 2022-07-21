const BASE_URL = process.env.REACT_APP_API_URL;

async function TASKS_GET() {
  try {
    const response = await fetch(`${BASE_URL}/tasks`);
    if (!response.ok) throw new Error();
    const json = await response.json();
    return json;
  } catch (error) {
    return null;
  }
}

async function TASK_CREATE(body) {
  try {
    const response = await fetch(`${BASE_URL}/tasks`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    console.log(response);
    if (!response.ok) throw new Error();
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
    return null;
  }
}

async function TASK_UPDATE(id, body) {
  try {
    const response = await fetch(`${BASE_URL}/tasks/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(body),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    if (!response.ok) throw new Error();
    const json = await response.json();
    return json;
  } catch (error) {
    return null;
  }
}

async function TASK_GETBYID(id) {
  try {
    const response = await fetch(`${BASE_URL}/tasks/${id}`);
    if (!response.ok) throw new Error();
    const json = await response.json();
    return json;
  } catch (error) {
    return null;
  }
}

async function TASK_DELETE(id) {
  try {
    const response = await fetch(`${BASE_URL}/tasks/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error();
    const json = await response.json();
    return json;
  } catch (error) {
    return null;
  }
}

export { TASKS_GET, TASK_CREATE, TASK_UPDATE, TASK_GETBYID, TASK_DELETE };
