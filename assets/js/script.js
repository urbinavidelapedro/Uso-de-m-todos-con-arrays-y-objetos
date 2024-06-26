


document.write('<p>Estadisticas centro medico ñuñoa</p>');

var radiologia = [
    {hora: '11:00', especialista: 'IGNACIO SCHULZ', paciente: 'FRANCISCA ROJAS', rut: '9878782-1', prevision: 'FONASA'},
    {hora: '11:30', especialista: 'FEDERICO SUBERCASEAUX', paciente: 'PAMELA ESTRADA', rut: '15345241-3', prevision: 'ISAPRE'},
    {hora: '15:00', especialista: 'FERNANDO WURTHZ', paciente: 'ARMANDO LUNA', rut: '16445345-9', prevision: 'ISAPRE'},
    {hora: '15:30', especialista: 'ANA MARIA GODOY', paciente: 'MANUEL GODOY', rut: '17666419-0', prevision: 'FONASA'},
    {hora: '16:00', especialista: 'PATRICIA SUAZO', paciente: 'RAMON ULLOA', rut: '14989389-K', prevision: 'FONASA'},
];

var traumatologia = [
    {hora: '8:00',  especialista: 'MARIA PAZ ALTUZARRA', paciente: 'PAULA SANCHEZ',     rut: '15554774-5', prevision: 'FONASA'},
    {hora: '10:00', especialista: 'RAUL ARAYA',          paciente: 'ANGÉLICA NAVAS',    rut: '15444147-9', prevision: 'ISAPRE'},
    {hora: '10:30', especialista: 'MARIA ARRIAGADA',     paciente: 'ANA KLAPP',         rut: '17879423-9', prevision: 'ISAPRE'},
    {hora: '11:00', especialista: 'ALEJANDRO BADILLA',   paciente: 'FELIPE MARDONES',   rut: '1547423-6', prevision: 'ISAPRE'},
    {hora: '11:30', especialista: 'CECILIA BUDNIK',      paciente: 'DIEGO MARRE',       rut: '16554741-K', prevision: 'FONASA'},
    {hora: '12:00', especialista: 'ARTURO CAVAGNARO',    paciente: 'CECILIA MENDEZ',    rut: '9747535-8', prevision: 'ISAPRE'},
    {hora: '12:30', especialista: 'ANDRES KANACRI',      paciente: 'MARCIAL SUAZO',     rut: '11254785-5', prevision: 'ISAPRE'},
];

var dental = [
    {hora: '8:30',  especialista: 'ANDREA ZUÑIGA',          paciente: 'MARCELA RETAMAL',rut: '11123425-6', prevision: 'ISAPRE'},
    {hora: '11:00', especialista: 'MARIA PIA ZAÑARTU',      paciente: 'ANGEL MUÑOZ',    rut: '9878789-2',  prevision: 'ISAPRE'},
    {hora: '11:30', especialista: 'SCARLETT WITTING',       paciente: 'MARIO KAST',     rut: '7998789-5',  prevision: 'FONASA'},
    {hora: '13:00', especialista: 'FRANCISCO VON TEUBER',   paciente: 'KARIN FERNANDEZ',rut: '18887662-K', prevision: 'FONASA'},
    {hora: '13:30', especialista: 'EDUARDO VIÑUELA',        paciente: 'HUGO SANCHEZ',   rut: '17665461-4', prevision: 'FONASA'},
    {hora: '14:00', especialista: 'RAQUEL VILLASECA',       paciente: 'ANA SEPULVEDA',  rut: '14441281-0', prevision: 'ISAPRE'},
];

// agregar consultas a traumatologia

traumatologia.push(
    {hora: '9:00', especialista: 'RENE POBLETE', paciente: 'ANA GELLONA', rut: '13123329-7', prevision: 'ISAPRE'},
    {hora: '9:30', especialista: 'MARIA SOLAR', paciente: 'RAMIRO ANDRADE', rut: '12221451-K', prevision: 'FONASA'},
    {hora: '10:00', especialista: 'RAUL LOYOLA', paciente: 'CARMEN ISLA', rut: '10112348-3', prevision: 'ISAPRE'},
    {hora: '10:30', especialista: 'ANTONIO LARENAS', paciente: 'PABLO LOAYZA', rut: '13453234-1', prevision: 'FONASA'},
    {hora: '12:00', especialista: 'MATIAS ARAVENA', paciente: 'SUSANA POBLETE', rut: '14345656-6', prevision: 'FONASA'}
);

// borrar primer elemento radiologia
radiologia.shift();

// eliminar ultimo elemento de radiologia

radiologia.pop();





document.write(`<p>Cantidad de atenciones para Radiología: ${radiologia.length}</p>`);
document.write(`<p>Cantidad de atenciones para Traumatología: ${traumatologia.length}</p>`);
document.write(`<p>Cantidad de atenciones para Dental: ${dental.length}</p>`);


document.write(`<p>Primera atencion de radiología: ${radiologia[0].paciente} - ${radiologia[0].prevision} | Última atención de radiología: ${radiologia[radiologia.length -1].paciente} - ${radiologia[radiologia.length -1].prevision}.</p>`);
document.write(`<p>Primera atencion de traumatología: ${traumatologia[0].paciente} - ${traumatologia[0].prevision} | Última atención de traumatología : ${traumatologia[traumatologia.length -1].paciente} - ${traumatologia[traumatologia.length -1].prevision}.</p>`);
document.write(`<p>Primera atencion dental: ${dental[0].paciente} - ${dental[0].prevision} | Última atención de dental: ${dental[dental.length -1].paciente} - ${dental[dental.length -1].prevision}.</p>`);

document.write(`<p>Consultas dentales: </p>`);
for (i=0;i<dental.length;i++){
    document.write(`<br> ${dental[i].hora} - ${dental[i].especialista} - ${dental[i].paciente} - ${dental[i].rut} - ${dental[i].prevision} <br>   `)


};

document.write(`<p>Total de los pacientes del centro: </p>`);

for (i=0;i<radiologia.length;i++){
    document.write(`${radiologia[i].paciente} <br>   `)
};

for (i=0;i<traumatologia.length;i++){
    document.write(`${traumatologia[i].paciente} <br>   `)
};

for (i=0;i<dental.length;i++){
    document.write(`${dental[i].paciente} <br>   `)
};

//filtro radiologia ISAPRE
const pacientesIsapreRadiologia = radiologia.filter(paciente => paciente.prevision === 'ISAPRE');
document.write('<br>Pacientes de ISAPRE con hora agendada para Radiología:<br>');
pacientesIsapreRadiologia.forEach(paciente => {
    document.write(`${paciente.paciente} - ${paciente.prevision}<br>`);
});

//filtro tarumatologia ISAPRE
const pacientesIsapreTraumatologia = traumatologia.filter(paciente => paciente.prevision === 'ISAPRE');
document.write('<br>Pacientes de ISAPRE con hora agendada para Traumatología:<br>');
pacientesIsapreTraumatologia.forEach(paciente => {
    document.write(`${paciente.paciente} - ${paciente.prevision}<br>`);
});

//filtro dental ISAPRE
const pacientesDental = dental.filter(paciente => paciente.prevision === 'ISAPRE');
document.write('<br>Pacientes de ISAPRE con hora agendada para Odontología:<br>');
pacientesIsapreTraumatologia.forEach(paciente => {
    document.write(`${paciente.paciente} - ${paciente.prevision}<br>`);
});
