import "./style.css";

export function FormLogin() {
  return (
    <div className="form">
      <label>User:</label>
      <input type="text" />
      <label>Password:</label>
      <input type="password" />
      <label>Repeat password:</label>
      <input type="password" />
      <label>Nickname:</label>
      <input type="text" />
      <label>E-mail:</label>
      <input type="text" />
    </div>
  );
}
