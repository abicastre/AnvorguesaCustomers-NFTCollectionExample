// deplaoy es una función asincrona
const deploy = async () => {
    // getSigners() trae la información que traemos desde nuestra llave privada
    // deployer es un objeto que nos permite desplegar contratos a la red que tengamos configurada
    const [deployer] = await ethers.getSigners();
  
    console.log("Deploying contract with the account:", deployer.address);
  
    // Definimos Anvorguesa Customers en el contexto
    const AnvorguesaCustomers = await ethers.getContractFactory("AnvorguesaCustomers");
    // Instancia del contracto desplegado
    const deployed = await AnvorguesaCustomers.deploy(10000);
  
    console.log("Anvorguesa Customers is deployed at:", deployed.address);
  };
  
  // Llamando la función deploy()
  deploy()
    .then(() => process.exit(0))
    .catch((error) => {
      console.log(error);
      process.exit(1);
    });