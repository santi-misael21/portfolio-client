//Acá entra en bruto un Array que contiene los deploments y algunos tienen varios dominios, por lo cual se repiten los mismos deployments en varios elementos, lo cual para nuestros fines resulta redundante. Por eso tendremos una function donde ingrese el Array en bruto y devuelva otra lista reducida donde no se repitan los deployments basándose en leer los .name de cada uno

// entra el primero 
// lo comparo con la variable n
// si son iguales, no hago nada, continúo
// si no son iguales, guardo ese índice en el filtered
// 
// guardo su nombre
// p


export function findRepsDeployments (array) {
    // const data = [{name: 1}, {name: 2}, {name: 3}, {name: 2}, ];
    var unique = [];
    var data = [];
    array.forEach(function (item) {
        if(!unique.includes(item.name)){
            unique.push(item.name)
            data.push(item)
        }
    });
    return data
};

var deployments = [
{uid: 'dpl_6VgMEsCU6wxpm5idTwJHiJnV6a6j', name: 'pi-food-main', url: 'pi-food-main-5v2nanol9-santi-misael21.vercel.app', created: 1672369493663},

{uid: 'dpl_8TLhftEu2NXDm5XH5S6mUmV97v9f', name: 'pi-food-main', url: 'pi-food-main-j8s8g5igq-santi-misael21.vercel.app', created: 1672369142945},

{uid: 'dpl_CQ1BgvKADPkYEhWsL7esYDMyarmA', name: 'pi-food-main', url: 'pi-food-main-rlaziuq1o-santi-misael21.vercel.app', created: 1672369129313},

{uid: 'dpl_3h36QJzk3574EC26FdofCsGYeGrC', name: 'sudo-qubs', url: 'sudo-qubs-o8cdyf3v3-santi-misael21.vercel.app', created: 1672341803566},

{uid: 'dpl_93cDRgDW2jUGLdE2ibR2nKaxFbKG', name: 'sudo-qubs', url: 'sudo-qubs-dfdbq30b1-santi-misael21.vercel.app', created: 1672298898729},
]
