import instance from "./axiosinstance";

async function postContactData(data) {
  try {
    const response = await fetch(
      `${process.env.NEXT_API_URL}/contacts?populate=*`,
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export default postContactData;
