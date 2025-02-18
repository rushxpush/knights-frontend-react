import { useState } from "react"
import { loginUser } from "../features/auth/authSlice";
import { useAppDispatch } from "../store";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export function LoginPage() {
  const [username, setUsername] = useState('john');
  const [password, setPassword] = useState('johnpass');

  const { status, error } = useSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const handleLogin = async () => {

    dispatch(loginUser({username, password}));

    setTimeout(() => {
      navigate('/');
    }, 1500);
    
  }

  return (
    <div className="container">
      <h1>Login</h1>
      <input type="text" name="login" placeholder="Nome do Usuário" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" name="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={() => handleLogin()} disabled={status === 'loading'}>{status === 'loading' ? 'Loading...' : 'Login'}</button>
      {/* {status === 'loading' && <div className="loader"></div>} */}
      {status === 'failed' && <div className="error">{error}</div>}
    </div>
  )
}