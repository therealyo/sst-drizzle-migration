export const handler = async (event: any) => {
  console.log("migration works!");
  return {
    statusCode: 200,
    body: "ok",
  };
};
