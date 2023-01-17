const Home = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const products = [{id: 1, name: 'iphon11'}, {id: 2, name: 'iphon12'}];
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('email: ', email)
        console.log('password: ', password)
    }
    return (
        <>
            Home
            <ul>
                {products.map((item) => <Product productItem={item} key={item.id} data="hello loc"/> )}
            </ul>

            <form onSubmit={handleSubmit}>
            <label>Enter your email:
                <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </label>
            <label>Enter your password:
                <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </label>
            <input type="submit" />
            </form>
        </>
    )
}

function Product(props) {
    console.log(props);
    return <li>I am a {props.productItem.name} <span>{props.data}</span></li> ;
  }

export default Home