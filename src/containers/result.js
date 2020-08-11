getUser() = async () => {
  try {
    const response = await axios.get("#############");
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};
