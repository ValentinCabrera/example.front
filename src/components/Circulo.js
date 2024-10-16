export default function Circulo({ color }) {
    function handleClick() {
        alert('Hiciste click en el círculo de color ' + color)
    }


    return (
        <div style={{
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            backgroundColor: color
        }}
            onClick={handleClick}
        >
        </div>
    );
}