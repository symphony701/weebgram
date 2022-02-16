import "./style.css";

export function FormLogin() {
  return (
    <div className="form">
      <label >User:</label>
      <input type="text" />
      <label>Password:</label>
      <input type="password" />
    </div>
  );
}
