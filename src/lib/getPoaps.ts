export const getPoaps = async (account: string) => {
  try {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-api-key": process.env.POAP_API_KEY || "",
      },
    };
    const response = await fetch(
      `https://api.poap.tech/actions/scan/${account}`,
      options
    );
    const data: poap[] = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
