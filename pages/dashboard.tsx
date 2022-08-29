import Router from "next/router";

export default () => {
  const logout = async () => {
    await fetch("/api/auth/logout");
    Router.reload();
  };

  return (
    <>
      <h1>Restricted Area</h1>
      <button onClick={logout}>logout</button>
    </>
  );
};
