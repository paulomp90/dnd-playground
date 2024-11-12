export async function getPeople() {
  try {
    const response = await fetch("https://swapi.dev/api/people");

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();

    const newArray = json.results.map((elem) => {
      return {
        ...elem,
        id: elem.name.replace(/\s/g, "").toLowerCase(),
      };
    });
    console.log(json);

    return newArray;
  } catch (error) {
    console.error(error);
  }
}
