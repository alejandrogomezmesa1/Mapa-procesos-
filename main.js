// Data store for Process Details
const PROCESS_DATA = {
    inteligencia: {
        title: "Proceso Gestión de Inteligencia de Negocio",
        type: "strategic",
        typeName: "Proceso Estratégico",
        desc: "Monitoreo del comportamiento global del negocio mediante análisis de métricas clave de retención y rentabilidad para la toma de decisiones directivas.",
        inputs: "Reportes de ventas semanales, registros de envases perdidos, encuestas de satisfacción, costos de materias primas.",
        outputs: "Estrategias de fidelización, ajustes de precios, planes de expansión de rutas, reportes de rentabilidad por plato.",
        kpis: [
            "Índice de Churn (tasa de cancelación de clientes semanales)",
            "Costo total por plato (materia prima + empaque + logística)",
            "Rentabilidad neta del negocio (meta de margen operativo)"
        ]
    },
    menus: {
        title: "Proceso Gestión de Menús y Planificación Semanal",
        type: "strategic",
        typeName: "Proceso Estratégico",
        desc: "Planificación balanceada de las opciones alimenticias semanales, asegurando la variedad nutricional y la viabilidad operativa de la cocina.",
        inputs: "Historial de platos populares, disponibilidad estacional de ingredientes, inventario inicial de bodega.",
        outputs: "Menú semanal publicado (fórmula fija: 3 platos de cerdo, 1 de res, 1 de pollo), requerimientos consolidados de ingredientes.",
        kpis: [
            "Índice de aceptación de menús (calificación de platos)",
            "Costo proyectado de materia prima semanal",
            "Rotación de proteínas (cumplimiento de la regla 3-1-1)"
        ]
    },
    cupos: {
        title: "Proceso Gestión de Cupos y Capacidad Operativa",
        type: "strategic",
        typeName: "Proceso Estratégico",
        desc: "Control del volumen máximo de pedidos procesables por día para garantizar que la cocina y el equipo de reparto mantengan los estándares de puntualidad y calidad.",
        inputs: "Capacidad instalada de cocina (personal/equipos), número de repartidores disponibles de lunes a jueves.",
        outputs: "Umbral máximo de suscripciones habilitadas, cronograma de contratación y refuerzos operacionales.",
        kpis: [
            "Capacidad operativa utilizada (%)",
            "Cierre oportuno de contratación (Lunes a Jueves antes de las 8:00 PM)",
            "Incidentes por sobrecapacidad (pedidos retrasados)"
        ]
    },
    clientes: {
        title: "Proceso Gestión de Clientes y Captación",
        type: "misional",
        typeName: "Proceso Misional / Operativo",
        desc: "Atención al cliente mediante canales digitales, registro de nuevos usuarios en el CRM, y control estricto de requerimientos dietarios.",
        inputs: "Consultas entrantes de WhatsApp, recomendaciones de clientes, registros de alergias y preferencias alimenticias.",
        outputs: "Fichas de clientes actualizadas en el sistema, bases de datos segmentadas para difusiones.",
        kpis: [
            "Tasa de conversión de prospectos a clientes activos",
            "Integridad de datos en CRM (% de fichas con registro de alergias)",
            "Tiempo medio de respuesta inicial en WhatsApp"
        ]
    },
    confirmacion: {
        title: "Proceso Gestión de Confirmación y Pago Semanal",
        type: "misional",
        typeName: "Proceso Misional / Operativo",
        desc: "Consolidación de las confirmaciones semanales de los suscriptores y registro de los pagos a través de canales digitales antes del corte operativo.",
        inputs: "Mensajes de confirmación de clientes, comprobantes de transferencias (MercadoPago, Nequi).",
        outputs: "Listado oficial de cocas a producir para la siguiente semana (cierre de base de datos Viernes 10:00 PM).",
        kpis: [
            "Cumplimiento del plazo de pago (% de pagos antes del viernes 10:00 PM)",
            "Tasa de conciliación de pagos automática vs. manual",
            "Efectividad de confirmaciones (pedidos reales vs. proyección)"
        ]
    },
    produccion: {
        title: "Proceso Gestión de Producción y Empaque",
        type: "misional",
        typeName: "Proceso Misional / Operativo",
        desc: "Preparación culinaria bajo altos estándares higiénicos y empaquetado en envases herméticos reutilizables. El proceso arranca la noche anterior.",
        inputs: "Listado oficial de producción, ingredientes frescos adquiridos, cocas de vidrio higienizadas y listas.",
        outputs: "Viandas empacadas, etiquetadas y clasificadas por zona de entrega al amanecer.",
        kpis: [
            "Merma de materia prima en cocina (%)",
            "Cumplimiento del horario de empaque (cocas listas al amanecer)",
            "Precisión del porcionamiento por plato (gramajes estándar)"
        ]
    },
    entregas: {
        title: "Proceso Gestión de Entregas y Logística de Rutas",
        type: "misional",
        typeName: "Proceso Misional / Operativo",
        desc: "Planificación de rutas de despacho y transporte motorizado de las viandas, garantizando la cadena de temperatura y la puntualidad.",
        inputs: "Direcciones de clientes activos, asignación de motorizados, cocas empacadas listas para despacho.",
        outputs: "Almuerzos entregados en la puerta del trabajo, notificaciones previas enviadas al cliente.",
        kpis: [
            "Índice de puntualidad en entregas (% dentro de la ventana horaria)",
            "Cumplimiento del protocolo de pre-aviso (notificar 5 minutos antes)",
            "Tiempo de espera promedio en puerta (meta: menor a 5 minutos)"
        ]
    },
    envases: {
        title: "Proceso Gestión de Envases, Trazabilidad y Limpieza",
        type: "misional",
        typeName: "Proceso Misional / Operativo",
        desc: "Control físico de las cocas retornables de vidrio, asegurando su recolección diaria, su limpieza industrial y su disponibilidad para producción.",
        inputs: "Cocas vacías recuperadas de los clientes en la entrega diaria, registros de envases no devueltos.",
        outputs: "Inventario de envases listos y esterilizados para la siguiente producción de empaque.",
        kpis: [
            "Tasa de retorno de envases por ruta (meta: 98%)",
            "Eficiencia del proceso de lavado (inspección de higiene sin novedades)",
            "Costo de reposición de vidrio por rotura o extravío"
        ]
    },
    novedades: {
        title: "Proceso Gestión de Novedades y Servicio al Cliente",
        type: "misional",
        typeName: "Proceso Misional / Operativo",
        desc: "Resolución de incidencias diarias, tales como ausencias de clientes, cancelaciones temporales, reprogramaciones de rutas y retroalimentación de calidad.",
        inputs: "Reportes de motorizados (cliente no responde), solicitudes de suspensión temporal, quejas o reclamos.",
        outputs: "Reprogramaciones de entrega, notas de crédito o saldos a favor, acciones correctivas de servicio.",
        kpis: [
            "Tiempo de resolución de novedades críticas en ruta (meta: < 10 min)",
            "Tasa de reclamos sobre el sabor o temperatura de la comida",
            "Nivel de satisfacción del cliente (CSAT de novedades resueltas)"
        ]
    },
    financiera: {
        title: "Proceso Gestión Financiera y Compras",
        type: "support",
        typeName: "Proceso de Soporte y Apoyo",
        desc: "Administración del flujo de caja, control de egresos, facturación de suscripciones, y compras mayoristas programadas.",
        inputs: "Recaudos semanales/mensuales, cotizaciones de proveedores de la Central Mayorista, facturas de servicios.",
        outputs: "Órdenes de compra los sábados a las 10:00 AM, pago a proveedores y repartidores, balances contables.",
        kpis: [
            "Ahorro obtenido en compras programadas vs. compras de emergencia",
            "Días de caja libre operativos (cash flow runway)",
            "Precisión contable (conciliación bancaria sin descuadres)"
        ]
    },
    comunicaciones: {
        title: "Proceso Gestión de Comunicaciones y Notificaciones",
        type: "support",
        typeName: "Proceso de Soporte y Apoyo",
        desc: "Envío sistematizado de notificaciones informativas a los grupos de difusión sobre menús de la semana, encuestas de retroalimentación y alertas festivas.",
        inputs: "Diseño del menú semanal, calendario de festivos, requerimientos de encuestas operativas.",
        outputs: "Mensajes masivos personalizados enviados los domingos, recordatorios de pagos oportunos.",
        kpis: [
            "Tasa de apertura y lectura de mensajes en canales de difusión",
            "Retorno de encuestas completadas (tasa de respuesta)",
            "Reducción de consultas repetitivas en canales de atención directa"
        ]
    },
    evaluacion: {
        title: "Proceso Gestión de Evaluación y Mejora Continua",
        type: "support",
        typeName: "Proceso de Soporte y Apoyo",
        desc: "Auditoría interna de procesos operativos y estratégicos para identificar cuellos de botella en la entrega o sobrecostos en materias primas.",
        inputs: "Registros históricos de tiempos de entrega, datos de churn acumulados, reportes de mermas de insumos.",
        outputs: "Planes de acción correctiva, rediseño de flujos de trabajo, metas trimestrales actualizadas.",
        kpis: [
            "Cumplimiento de planes de mejora aprobados (%)",
            "Tasa de retención de clientes a mediano plazo (LTV)",
            "Reducción global de costos operativos por optimización"
        ]
    }
};

// Data store for Workshop Document Previews (Parsed and clean HTML content)
const DOCUMENT_CONTENTS = {
    ficha: `
        <h2>INFORMACIÓN GENERAL DEL PROYECTO</h2>
        <table>
            <tr>
                <th>Nombre del Aplicativo</th>
                <td>JackSoft</td>
            </tr>
            <tr>
                <th>Sector Objetivo</th>
                <td>Economía Popular</td>
            </tr>
            <tr>
                <th>Cliente Real</th>
                <td>La Coca de Jacks SAS (Representante: Richard Daniel Ortiz)</td>
            </tr>
            <tr>
                <th>Dirección</th>
                <td>Calle 28a #65a 24, Medellín, Antioquia</td>
            </tr>
            <tr>
                <th>Correo Electrónico</th>
                <td>lacocadejacksmed@gmail.com</td>
            </tr>
            <tr>
                <th>Teléfono de Contacto</th>
                <td>311 643 7887</td>
            </tr>
        </table>

        <h2>INFORMACIÓN ACADÉMICA (SENA)</h2>
        <p>Este proyecto se realiza en el marco del programa de formación tecnológica del Servicio Nacional de Aprendizaje (SENA):</p>
        <blockquote>
            <strong>Programa de Formación:</strong> Tecnología en Análisis y Desarrollo de Software (ADSO)<br>
            <strong>Número de Ficha:</strong> 3312824<br>
            <strong>Instructor Titular:</strong> Newton Willard Pomare
        </blockquote>

        <h2>APRENDICES PARTICIPANTES EN EL PROYECTO</h2>
        <table>
            <thead>
                <tr>
                    <th>Documento</th>
                    <th>Nombres y Apellidos</th>
                    <th>Correo Electrónico</th>
                    <th>Teléfono</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1000899884</td>
                    <td><strong>Alejandro Gomez Mesa</strong></td>
                    <td>alejandrogomezmesa1@gmail.com</td>
                    <td>301 684 5559</td>
                </tr>
                <tr>
                    <td>1066598600</td>
                    <td><strong>Omar David Meneses Verona</strong></td>
                    <td>ODMV36335917@soy.sena.edu.co</td>
                    <td>302 640 6048</td>
                </tr>
                <tr>
                    <td>1003540637</td>
                    <td><strong>Erick Santiago Camargo</strong></td>
                    <td>camargosantiago78@gmail.com</td>
                    <td>320 315 7261</td>
                </tr>
                <tr>
                    <td>1025649345</td>
                    <td><strong>Luis Gabriel Mesa</strong></td>
                    <td>mesluis702@gmail.com</td>
                    <td>321 393 9084</td>
                </tr>
                <tr>
                    <td>1023630420</td>
                    <td><strong>Samuel Morales Marin</strong></td>
                    <td>samuelmarinmorales@gmail.com</td>
                    <td>318 253 1805</td>
                </tr>
            </tbody>
        </table>

        <h2>ALCANCE PROPUESTO DE JACKSOFT</h2>
        <p>JackSoft busca sistematizar los procesos clave de <strong>La Coca de Jacks</strong>:</p>
        <ul>
            <li>Registro y administración de clientes con historial de alergias y preferencias alimenticias.</li>
            <li>Gestión de pedidos semanales y pasarela de carga de comprobantes de pago.</li>
            <li>Optimización de la asignación de viandas a los motorizados por zonas geográficas de Medellín.</li>
            <li>Monitoreo de retorno físico de cocas de vidrio mediante códigos QR o registros automatizados.</li>
        </ul>
    `,
    requisitos: `
        <h2>Taller: Conceptos de Ingeniería de Requisitos</h2>
        <p>A continuación se consolidan los conceptos clave y respuestas de estudio sobre el análisis y especificación de requisitos en el desarrollo de software:</p>
        
        <div class="q-a-section">
            <div class="question">1. ¿Qué son los requisitos en un sistema de software?</div>
            <div class="answer">
                Son las descripciones de los servicios que el sistema de software debe proporcionar y las restricciones bajo las cuales este debe operar. Los requisitos reflejan las necesidades de los clientes y usuarios finales para resolver un problema de negocio específico.
            </div>
        </div>

        <div class="q-a-section">
            <div class="question">2. Clasificación de Requisitos: ¿Funcionales vs. No Funcionales?</div>
            <div class="answer">
                <ul>
                    <li><span class="badge-inline">Requisitos Funcionales</span>: Definen lo que el sistema <strong>debe hacer</strong>. Describen las funciones, entradas, procesos y salidas. <br><em>Ejemplo: "El sistema debe permitir a los clientes adjuntar su comprobante de pago de Nequi."</em></li>
                    <li><span class="badge-inline">Requisitos No Funcionales</span>: Definen <strong>cómo</strong> se comporta el sistema bajo ciertas restricciones de calidad, rendimiento o seguridad. <br><em>Ejemplo: "El sistema debe cifrar los datos personales de los clientes y la base de datos debe requerir credenciales seguras."</em></li>
                </ul>
            </div>
        </div>

        <div class="q-a-section">
            <div class="question">3. ¿Cómo se recolectan los requisitos? (Fase de Elicitación)</div>
            <div class="answer">
                La elicitación es el proceso de descubrir los requisitos a través de la investigación y comunicación activa. Las técnicas principales son:
                <ol>
                    <li><strong>Entrevistas</strong>: Diálogo directo con dueños del negocio y operarios para captar el flujo general.</li>
                    <li><strong>Observación directa</strong>: Acompañar a los trabajadores (ej. ver cómo se cocina, empaca y reparte en moto) para descubrir pasos implícitos que ellos podrían olvidar mencionar.</li>
                    <li><strong>Cuestionarios</strong>: Útiles para recolectar información estructurada cuando hay muchos usuarios o clientes.</li>
                    <li><strong>Análisis de documentos</strong>: Revisión de formatos actuales de Excel, minutas de WhatsApp o recibos físicos para entender los datos esenciales.</li>
                </ol>
            </div>
        </div>

        <div class="q-a-section">
            <div class="question">4. ¿Cómo analizar los requisitos recolectados?</div>
            <div class="answer">
                Consiste en filtrar e integrar la lista de requisitos mediante la:
                <ul>
                    <li><strong>Detección de conflictos</strong>: Identificar discrepancias (ej. el administrador quiere reportes automáticos y el repartidor dice que no tiene internet en la vía para subir estados en tiempo real).</li>
                    <li><strong>Verificación de viabilidad</strong>: Validar si la funcionalidad es realizable con el presupuesto, la tecnología y los plazos pactados.</li>
                    <li><strong>Agrupación modular</strong>: Organizar la lógica por componentes (Autenticación, Clientes, Despachos, Inventario de Envases).</li>
                </ul>
            </div>
        </div>

        <div class="q-a-section">
            <div class="question">5. ¿Cómo priorizar los requisitos utilizando el método MoSCoW?</div>
            <div class="answer">
                Ayuda a organizar qué se construye primero para evitar retrasos:
                <ul>
                    <li><strong>Must Have (Debe tener)</strong>: Requisitos vitales. Sin ellos, el software no sirve (ej: registrar clientes y confirmar cocas).</li>
                    <li><strong>Should Have (Debería tener)</strong>: Funciones importantes pero no críticas para el lanzamiento (ej: recordatorios de pago automáticos).</li>
                    <li><strong>Could Have (Podría tener)</strong>: Mejoras deseables si sobra tiempo y presupuesto (ej: cambiar colores del tema visual).</li>
                    <li><strong>Won't Have (No tendrá en esta versión)</strong>: Descartado por ahora para enfocarse en lo esencial.</li>
                </ul>
            </div>
        </div>

        <div class="q-a-section">
            <div class="question">6. ¿Cómo se especifican y validan los requisitos?</div>
            <div class="answer">
                <ul>
                    <li><strong>Especificación</strong>: Traducción del lenguaje cotidiano a un formato formal. Se usan <em>Historias de Usuario</em> ("Como suscriptor, quiero ver el menú para elegir mi almuerzo") o <em>Casos de Uso</em> detallados.</li>
                    <li><strong>Validación</strong>: Asegurar que los requisitos escritos coinciden con lo que el cliente quiere realmente. Se logra revisando conjuntamente los documentos de diseño y mostrando <strong>prototipos o maquetas visuales rápidas</strong> antes de programar el código final.</li>
                </ul>
            </div>
        </div>
    `,
    comunicacion: `
        <h2>Taller: Elicitación y Comunicación Eficaz</h2>
        <p>Este documento analiza la importancia estratégica de la etapa de diseño de software y las recomendaciones prácticas para establecer flujos de información eficientes con clientes y equipos:</p>

        <div class="q-a-section">
            <div class="question">1. ¿Por qué es importante conocer detalladamente las necesidades del cliente antes de desarrollar el software?</div>
            <div class="answer">
                Es fundamental para construir un producto útil que realmente resuelva las necesidades de la empresa y no una herramienta que el cliente termine abandonando.<br>
                <blockquote>
                    <strong>La Regla de Oro de Ingeniería de Software:</strong><br>
                    Modificar un requerimiento o corregir un error en la fase de diseño es extremadamente económico, pero hacerlo cuando el software ya está compilado y en producción puede costar <strong>hasta 100 veces más</strong> debido a la refactorización de código, pruebas y bases de datos afectadas.
                </blockquote>
            </div>
        </div>

        <div class="q-a-section">
            <div class="question">2. ¿Qué ocurre si el cliente no suministra suficiente información inicial? ¿Cómo afecta al proyecto?</div>
            <div class="answer">
                Cuando los requisitos son vagos o incompletos, el desarrollo sufre de <strong>corrupción del alcance (Scope Creep)</strong>. El proyecto empieza a extenderse indefinidamente debido a pequeños cambios que alteran la base lógica del sistema, incrementando los costos, quemando al equipo de desarrollo y posponiendo la fecha de entrega.
            </div>
        </div>

        <div class="q-a-section">
            <div class="question">3. Recomendaciones para lograr una comunicación eficaz con el cliente</div>
            <div class="answer">
                <ul>
                    <li><strong>Evitar tecnicismos complejos</strong>: En lugar de decir "estamos configurando los endpoints en FastAPI y validando esquemas Pydantic", es mejor explicar: "Estamos preparando la tubería digital para que la información de los pedidos viaje rápido y de forma segura".</li>
                    <li><strong>La técnica del "Espejo"</strong>: Repetir lo que el cliente solicita usando palabras propias ("Entonces, Richard, lo que necesitas es que el sistema genere el listado de cocas vacías a recoger el lunes a las 8:00 AM, ¿es correcto?"). Esto valida que ambas partes están alineadas.</li>
                    <li><strong>Mostrar avances visuales de forma temprana y frecuente</strong>: A los clientes les cuesta comprender diagramas de bases de datos. Prefieren ver maquetas de pantallas o PDFs de muestra. Esto les da una idea real y permite reajustar el rumbo rápidamente.</li>
                    <li><strong>Gestionar expectativas con honestidad</strong>: Si una funcionalidad es muy compleja y retrasará el cronograma, se debe informar de inmediato en lugar de maquillar la situación hasta el día de la entrega.</li>
                </ul>
            </div>
        </div>

        <div class="q-a-section">
            <div class="question">4. Recomendaciones para la comunicación y sincronización con el equipo de programadores</div>
            <div class="answer">
                <ul>
                    <li><strong>Documentación viva</strong>: Mantener actualizados los archivos README.md de instalación y documentar los bloques de código complejos respondiendo al "por qué" se hizo así, no al "cómo" (el cómo ya lo dice el propio código).</li>
                    <li><strong>Estandarización de commits en Git</strong>: Evitar mensajes vagos como "cambios" o "arreglos". Utilizar mensajes descriptivos con estructura clara (ej: <code>feat: agrega exportación a PDF en módulo de rutas</code>).</li>
                    <li><strong>Reuniones diarias cortas (Daily Standups)</strong>: Encuentros rápidos de 10 a 15 minutos enfocados en tres preguntas puntuales:
                        <ol>
                            <li>¿Qué logré terminar ayer?</li>
                            <li>¿En qué voy a trabajar hoy?</li>
                            <li>¿Tengo algún impedimento o bloqueo que requiera ayuda?</li>
                        </ol>
                    </li>
                </ul>
            </div>
        </div>
    `
};

document.addEventListener('DOMContentLoaded', () => {
    // --- NAV LINK ACTIVE STATE ON SCROLL ---
    const sections = document.querySelectorAll('section, header');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            // Scroll offset check
            if (window.scrollY >= sectionTop - 120) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}` || (current === 'inicio' && link.getAttribute('href') === '#')) {
                link.classList.add('active');
            }
        });
    });

    // --- SMOOTH SCROLL FOR NAV LINKS & BUTTONS ---
    const allLinks = document.querySelectorAll('.nav-links a, .cta-button, .cta-secondary, .nav-logo');
    allLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId && targetId.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId === '#' ? 'body' : targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // --- INTERACTIVE PROCESS MAP DIAGRAM LOGIC ---
    const clickableProcesses = document.querySelectorAll('.clickable-process');
    const detailsPlaceholder = document.getElementById('details-placeholder');
    const detailsContent = document.getElementById('details-content');
    const detailsTitle = document.getElementById('details-title');
    const detailsType = document.getElementById('details-type');
    const detailsDesc = document.getElementById('details-desc');
    const detailsInputs = document.getElementById('details-inputs');
    const detailsOutputs = document.getElementById('details-outputs');
    const detailsKpis = document.getElementById('details-kpis');

    clickableProcesses.forEach(element => {
        element.addEventListener('click', function() {
            // Remove active classes from all processes
            clickableProcesses.forEach(el => el.classList.remove('active'));
            
            // Set clicked process as active
            this.classList.add('active');

            // Retrieve process key
            const processKey = this.getAttribute('data-process');
            const data = PROCESS_DATA[processKey];

            if (data) {
                // Hide placeholder and show content
                detailsPlaceholder.classList.add('hidden');
                detailsContent.classList.remove('hidden');

                // Populate details content
                detailsTitle.textContent = data.title;
                detailsDesc.textContent = data.desc;
                detailsInputs.textContent = data.inputs;
                detailsOutputs.textContent = data.outputs;

                // Set type badge content and styling
                detailsType.textContent = data.typeName;
                detailsType.className = `details-badge badge-${data.type}`;

                // Populate KPIs list
                detailsKpis.innerHTML = '';
                data.kpis.forEach(kpi => {
                    const li = document.createElement('li');
                    li.textContent = kpi;
                    detailsKpis.appendChild(li);
                });

                // Scroll to details panel on small viewports
                if (window.innerWidth <= 1024) {
                    document.getElementById('process-details-container').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }
            }
        });
    });

    // --- SVG VIEWPORT DRAG-TO-PAN AND WHEEL-ZOOM LOGIC ---
    const viewport = document.getElementById('svg-viewport');
    const zoomWrapper = document.getElementById('svg-zoom-wrapper');
    const btnZoomIn = document.getElementById('btn-zoom-in');
    const btnZoomOut = document.getElementById('btn-zoom-out');
    const btnReset = document.getElementById('btn-reset');

    let scale = 1.0;
    let panX = 0;
    let panY = 0;
    let isDragging = false;
    let startX = 0;
    let startY = 0;

    function updateTransform() {
        zoomWrapper.style.transform = `translate(${panX}px, ${panY}px) scale(${scale})`;
    }

    // Drag-to-pan implementation
    viewport.addEventListener('mousedown', (e) => {
        // Only drag if clicking on the background, not on clickable groups
        if (e.target.closest('.clickable-process')) return;

        isDragging = true;
        viewport.style.cursor = 'grabbing';
        startX = e.clientX - panX;
        startY = e.clientY - panY;
        e.preventDefault();
    });

    window.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        panX = e.clientX - startX;
        panY = e.clientY - startY;
        updateTransform();
    });

    window.addEventListener('mouseup', () => {
        isDragging = false;
        viewport.style.cursor = 'grab';
    });

    viewport.addEventListener('mouseleave', () => {
        isDragging = false;
        viewport.style.cursor = 'grab';
    });

    // Mouse wheel zoom implementation
    viewport.addEventListener('wheel', (e) => {
        e.preventDefault();
        const zoomSpeed = 0.05;
        if (e.deltaY < 0) {
            // Zoom In
            scale = Math.min(scale + zoomSpeed, 3.0);
        } else {
            // Zoom Out
            scale = Math.max(scale - zoomSpeed, 0.5);
        }
        updateTransform();
    });

    // Button controls
    btnZoomIn.addEventListener('click', () => {
        scale = Math.min(scale + 0.15, 3.0);
        updateTransform();
    });

    btnZoomOut.addEventListener('click', () => {
        scale = Math.max(scale - 0.15, 0.5);
        updateTransform();
    });

    btnReset.addEventListener('click', () => {
        scale = 1.0;
        panX = 0;
        panY = 0;
        updateTransform();
    });

    // Initial transform setup
    updateTransform();

    // --- PITCH SLIDESHOW CONTROLLER ---
    const pitchSlides = document.querySelectorAll('.pitch-slide');
    const pitchDots = document.querySelectorAll('.pitch-slider-dots .slider-dot');
    const btnPitchPrev = document.getElementById('btn-pitch-prev');
    const btnPitchNext = document.getElementById('btn-pitch-next');
    const btnPitchPlayPause = document.getElementById('btn-pitch-play-pause');
    
    let currentPitchSlide = 0;
    let pitchInterval = null;
    let isAutoPlayActive = true; // Auto-play enabled by default

    function showPitchSlide(index) {
        if (pitchSlides.length === 0) return;
        
        if (index < 0) {
            index = pitchSlides.length - 1;
        } else if (index >= pitchSlides.length) {
            index = 0;
        }

        pitchSlides.forEach(slide => slide.classList.remove('active'));
        pitchDots.forEach(dot => dot.classList.remove('active'));

        pitchSlides[index].classList.add('active');
        pitchDots[index].classList.add('active');
        currentPitchSlide = index;
    }

    if (btnPitchPrev && btnPitchNext) {
        btnPitchPrev.addEventListener('click', () => {
            showPitchSlide(currentPitchSlide - 1);
            if (isAutoPlayActive) resetPitchTimer();
        });

        btnPitchNext.addEventListener('click', () => {
            showPitchSlide(currentPitchSlide + 1);
            if (isAutoPlayActive) resetPitchTimer();
        });

        pitchDots.forEach(dot => {
            dot.addEventListener('click', function() {
                const targetIndex = parseInt(this.getAttribute('data-index'));
                showPitchSlide(targetIndex);
                if (isAutoPlayActive) resetPitchTimer();
            });
        });

        // Toggle Play/Pause state
        if (btnPitchPlayPause) {
            btnPitchPlayPause.addEventListener('click', function() {
                isAutoPlayActive = !isAutoPlayActive;
                if (isAutoPlayActive) {
                    this.textContent = '⏸️';
                    this.setAttribute('title', 'Pausar Reproducción');
                    startPitchTimer();
                } else {
                    this.textContent = '▶️';
                    this.setAttribute('title', 'Reanudar Reproducción');
                    clearInterval(pitchInterval);
                }
            });
        }

        // Auto-play feature (changes slide every 60 seconds)
        function startPitchTimer() {
            if (!isAutoPlayActive) return;
            clearInterval(pitchInterval);
            pitchInterval = setInterval(() => {
                showPitchSlide(currentPitchSlide + 1);
            }, 60000); // 60 seconds
        }

        function resetPitchTimer() {
            if (isAutoPlayActive) {
                clearInterval(pitchInterval);
                startPitchTimer();
            }
        }

        // Start slide rotation
        startPitchTimer();

        // Pause slideshow on hover only if auto-play is enabled
        const sliderWrapper = document.querySelector('.pitch-slider-wrapper');
        if (sliderWrapper) {
            sliderWrapper.addEventListener('mouseenter', () => {
                if (isAutoPlayActive) {
                    clearInterval(pitchInterval);
                }
            });
            sliderWrapper.addEventListener('mouseleave', () => {
                if (isAutoPlayActive) {
                    startPitchTimer();
                }
            });
        }
    }
});

// --- DOCUMENT PREVIEW MODAL LOGIC (Global functions for onclick handlers) ---
function openDocPreview(docKey) {
    const modal = document.getElementById('preview-modal');
    const modalTag = document.getElementById('modal-doc-tag');
    const modalTitle = document.getElementById('modal-doc-title');
    const modalContent = document.getElementById('modal-doc-content');

    const htmlContent = DOCUMENT_CONTENTS[docKey];

    if (htmlContent) {
        // Select appropriate header tags/badges
        let docTitle = "";
        let docTag = "";

        if (docKey === 'ficha') {
            docTitle = "Ficha de Caracterización de Proyecto (JackSoft)";
            docTag = "Ficha Técnica";
        } else if (docKey === 'requisitos') {
            docTitle = "Taller: Conceptos de Ingeniería de Requisitos";
            docTag = "Conceptos Básicos";
        } else if (docKey === 'comunicacion') {
            docTitle = "Taller: Importancia de las Necesidades y Comunicación";
            docTag = "Metodología ADSO";
        }

        modalTag.textContent = docTag;
        modalTitle.textContent = docTitle;
        modalContent.innerHTML = htmlContent;

        // Open modal
        modal.classList.add('open');
        document.body.style.overflow = 'hidden'; // Stop background scrolling
    }
}

function closeDocPreview() {
    const modal = document.getElementById('preview-modal');
    modal.classList.remove('open');
    document.body.style.overflow = ''; // Restore scrolling
}

// Close modal when clicking on the overlay background
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('preview-modal');
    modal.addEventListener('click', function(e) {
        if (e.target === this) {
            closeDocPreview();
        }
    });
});
