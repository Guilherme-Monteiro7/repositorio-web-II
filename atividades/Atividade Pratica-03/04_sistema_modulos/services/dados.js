async function buscarDados() {
    return new Promise(resolve => {
        setTimeout(() => resolve([10, 20, 30, 40, 50]), 500);
    });
}
export default buscarDados;