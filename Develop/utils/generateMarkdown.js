// TODO: Crear una función que devuelva una credencial de licencia según la licencia en la que se pasa
// Si no hay licencia, devuelva una cadena vacía
function renderLicenseBadge(license) {
  if (license !== "Ninguna"){
    return `![Github license](https://img.shields.io/badge/license-${license}-green.svg)`;
  }
  return "";
}

// TODO: Crear una función que devuelva el enlace de licencia
// Si no hay licencia, devuelva una cadena vacía
function renderLicenseLink(license) {
  if (license !== "Ninguna"){
    return `\n *[Licencia](#license)\n`;
  }
  return "";

}

// TODO: Crear una función que devuelva la sección de licencia de README
// Si no hay licencia, devuelva una cadena vacía
function renderLicenseSection(license) {
  if (license !== "Ninguna"){
    return `## Licencia
    Licencia: ${license}`
  }
  return "";
}

// TODO: Crear una función para generar un markdown para README
function generateMarkdown(data) {
  return `# ${data.titulo}
  ## Descripcion
  ${data.Descripcion}
  ## Indice
  * [Instalacion](#Instalacion)
  * [Uso](#Uso)
  * [Colaboradores](#Colaboradores)
  * [Licencia](#license)
  * [Pruebas](#Pruebas)
  * [Github](#githubUser)
  * [Email](#userEmail)
  ## Instalacion
  ${data.Instalacion}
  ## Uso
  ${data.Uso}
  ## Colaboradores
  ${data.Colaboradores}
  ${renderLicenseSection(data.license)}
  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}
  ## Pruebas
  ${data.Pruebas}
  ## GitHub
  [${data.githubUser}](https://github.com/${data.githubUser}/)
  ## Email
  ${data.userEmail}
`;
}

module.exports = generateMarkdown;
