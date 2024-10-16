export default function Producto() {
    return (
        <div style={{
            width: '300px',
            boxShadow: '0 0 10px black',
            padding: '10px',
        }}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS4rOOUcBXvBs3lw1jogo_Hckl9LIf8d-UTg&s" alt="Producto" style={{
                width: '100%',
                height: '400px',
                objectFit: 'cover'
            }} />
            <h2>Producto</h2>
            <p>
                Compratelo loco
            </p>
        </div>
    )
}