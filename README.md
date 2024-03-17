# gracious-wiles

site para laudario de tc de abdome e pelve - faça com um design muito bom e profissional, dinamico e iterativo,  adicione os seguintes :
<!DOCTYPE html> <html lang="pt"> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>Plataforma de Laudos Radiológicos - TC de Abdome</title> <style> body { font-family: Arial, sans-serif; padding: 20px; } h1, h2 { text-align: center; } .laudo-container { margin-bottom: 30px; } textarea { width: 100%; height: 100px; } </style> </head> <body> <h1>Plataforma de Laudos Radiológicos - TC de Abdome</h1>

Copy code
<div class="laudo-container">
    <h2>Fígado:</h2>
    <p>
        <input type="checkbox" id="figado-normal"> <label for="figado-normal">Normal</label><br>
        <input type="checkbox" id="hepatopatia-cronica"> <label for="hepatopatia-cronica">Hepatopatia crônica</label><br>
        <input type="checkbox" id="hepatopatia-congestiva"> <label for="hepatopatia-congestiva">Hepatopatia congestiva</label><br>
        <input type="checkbox" id="esteatose"> <label for="esteatose">Esteatose</label><br>
        <input type="checkbox" id="hemangioma"> <label for="hemangioma">Hemangioma</label><br>
        <input type="checkbox" id="hiperplasia-nodular-focal"> <label for="hiperplasia-nodular-focal">Hiperplasia nodular focal</label><br>
        <input type="checkbox" id="adenoma"> <label for="adenoma">Adenoma</label><br>
        <input type="checkbox" id="chc"> <label for="chc">Carcinoma hepatocelular (CHC)</label><br>
        <input type="checkbox" id="metastases"> <label for="metastases">Metástases</label><br>
        <input type="checkbox" id="abscesso"> <label for="abscesso">Abscesso</label><br>
        <input type="checkbox" id="esquistossomose"> <label for="esquistossomose">Esquistossomose</label><br>
        <input type="checkbox" id="cirrose"> <label for="cirrose">Cirrose</label><br>
        <textarea id="figado-outros" placeholder="Outros achados do fígado"></textarea>
    </p>
</div>

<div class="laudo-container">
    <h2>Vias biliares:</h2>
    <p>
        <input type="checkbox" id="vias-biliares-normais"> <label for="vias-biliares-normais">Normais</label><br>
        <input type="checkbox" id="colecistite"> <label for="colecistite">Colecistite</label><br>
        <input type="checkbox" id="colelitíase"> <label for="colelitíase">Colelitíase</label><br>
        <input type="checkbox" id="colangite"> <label for="colangite">Colangite</label><br>
        <input type="checkbox" id="colangiocarcinoma"> <label for="colangiocarcinoma">Colangiocarcinoma</label><br>
        <input type="checkbox" id="neoplasia-vesicula"> <label for="neoplasia-vesicula">Neoplasia da vesícula biliar</label><br>
        <textarea id="vias-biliares-outros" placeholder="Outros achados das vias biliares"></textarea>
    </p>
</div>

<div class="laudo-container">
    <h2>Pâncreas:</h2>
    <p>
        <input type="checkbox" id="pancreas-normal"> <label for="pancreas-normal">Normal</label><br>
        <input type="checkbox" id="pancreatite-aguda"> <label for="pancreatite-aguda">Pancreatite aguda</label><br>
        <input type="checkbox" id="pancreatite-cronica"> <label for="pancreatite-cronica">Pancreatite crônica</label><br>  
        <input type="checkbox" id="neoplasia-pancreas"> <label for="neoplasia-pancreas">Neoplasia pancreática</label><br>
        <input type="checkbox" id="neoplasia-intraductal"> <label for="neoplasia-intraductal">Neoplasia mucinosa papilar intraductal (IPMN)</label><br>
        <textarea id="pancreas-outros" placeholder="Outros achados do pâncreas"></textarea>
    </p>
</div>

<div class="laudo-container">
    <h2>Baço:</h2>
    <p>
        <input type="checkbox" id="baco-normal"> <label for="baco-normal">Normal</label><br>
        <input type="checkbox" id="esplenomegalia"> <label for="esplenomegalia">Esplenomegalia</label><br>
        <input type="checkbox" id="infarto-esplenico"> <label for="infarto-esplenico">Infarto esplênico</label><br>
        <textarea id="baco-outros" placeholder="Outros achados do baço"></textarea>
    </p>
</div>

<div class="laudo-container">
    <h2>Trato gastrointestinal:</h2>
    <p>
        <input type="checkbox" id="estomago-normal"> <label for="estomago-normal">Estômago normal</label><br>  
        <input type="checkbox" id="neoplasia-gastrica"> <label for="neoplasia-gastrica">Neoplasia gástrica</label><br>
        <input type="checkbox" id="lesao-duodenal"> <label for="lesao-duodenal">Lesão duodenal</label><br>
        <input type="checkbox" id="doenca-inflamatoria-intestinal"> <label for="doenca-inflamatoria-intestinal">Doença inflamatória intestinal</label><br>
        <input type="checkbox" id="neoplasia-colorretal"> <label for="neoplasia-colorretal">Neoplasia colorretal</label><br>
        <textarea id="trato-gastrointestinal-outros" placeholder="Outros achados do trato gastrointestinal"></textarea>
    </p>
</div>

<div class="laudo-container">
    <h2>Apêndice:</h2>
    <p>
        <input type="checkbox" id="apendice-normal"> <label for="apendice-normal">Normal</label><br>
        <input type="checkbox" id="apendicite"> <label for="apendicite">Apendicite</label><br>
        <textarea id="apendice-outros" placeholder="Outros achados do apêndice"></textarea>
    </p>
</div>

<div class="laudo-container">
    <h2>Rins:</h2>
    <p>
        <input type="checkbox" id="rins-normais"> <label for="rins-normais">Normais</label><br>
        <textarea id="rins-anormais" placeholder="Achados renais anormais"></textarea>
    </p>
</div>

<div class="laudo-container">
    <h2>Adrenais:</h2>   
    <p>
        <input type="checkbox" id="adrenais-normais"> <label for="adrenais-normais">Normais</label><br>
        <textarea id="adrenais-anormais" placeholder="Achados das adrenais anormais"></textarea>
    </p>
</div>

<div class="laudo-container">
    <h2>Cavidade peritoneal:</h2>
    <p>
        <input type="checkbox" id="liquido-livre"> <label for="liquido-livre">Líquido livre</label><br>
        <input type="checkbox" id="carcinomatose"> <label for="carcinomatose">Carcinomatose peritoneal</label><br>
        <textarea id="cavidade-peritoneal-outros" placeholder="Outros achados da cavidade peritoneal"></textarea>
    </p>
</div>

<div class="laudo-container">
    <h2>Hérnias:</h2>
    <p>  
        <textarea id="hernias" placeholder="Descrição de hérnias"></textarea>
    </p>
</div>

<div class="laudo-container">
    <h2>Ossos:</h2>
    <p>
        <input type="checkbox" id="ossos-normais"> <label for="ossos-normais">Normais</label><br>
        <input type="checkbox" id="lesoes-osteoliticas"> <label for="lesoes-osteoliticas">Lesões osteolíticas</label><br>
        <input type="checkbox" id="lesoes-osteoblasticas"> <label for="lesoes-osteoblasticas">Lesões osteoblásticas</label><br>
        <textarea id="ossos-outros" placeholder="Outros achados ósseos"></textarea>
    </p>
</div>

<div class="laudo-container">
    <h2>Conclusão e Impressão Diagnóstica:</h2>
    <p>
        <textarea id="conclusao" placeholder="Conclusão e impressão diagnóstica"></textarea>    
    </p>
</div>

<div class="laudo-container">
    <h2>Comparação com exames anteriores:</h2>
    <p>
        <textarea id="comparacao-exames-anteriores" placeholder="Comparação com exames anteriores"></textarea>
    </p>
</div>
</body> </html>
Este template de laudo inclui as principais estruturas e achados que estavam presentes no documento fornecido. Os campos de texto permitem que o radiologista insira descrições mais detalhadas para cada achado marcado ou adicione outros achados relevantes não listados.

A seção de conclusão permite um resumo dos principais diagnósticos e impressões. Também há uma seção para comparação com exames anteriores.

Claro que este template pode ser ainda mais personalizado e expandido para atender às necessidades específicas de cada serviço de radiologia. Mas espero que possa servir como um bom ponto de partida!

Por favor, me avise se você gostaria que eu fizesse mais algum ajuste ou acréscimo a este template HTML. Estou à disposição para refinar ainda mais esta plataforma de laudo estruturado.

Copy


Claude does not have the ability to run the code it generates yet.
KT
para cada achado que o radiologista escolher, deverá ter a descrição de acordo ao documento ao final em uma caixa de texto. entende? aí ele só copia e cola

Entendi! Vou atualizar o template para incluir uma área de texto associada a cada achado, onde o radiologista poderá copiar e colar a descrição correspondente do documento. Aqui está a versão atualizada:

<!DOCTYPE html> <html lang="pt"> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>Plataforma de Laudos Radiológicos - TC de Abdome</title> <style> body { font-family: Arial, sans-serif; padding: 20px; } h1, h2 { text-align: center; } .laudo-container { margin-bottom: 30px; } textarea { width: 100%; height: 100px; } </style> </head> <body> <h1>Plataforma de Laudos Radiológicos - TC de Abdome</h1>

Copy code
<div class="laudo-container">
    <h2>Fígado:</h2>
    <p>
        <input type="checkbox" id="figado-normal" onclick="document.getElementById('figado-normal-texto').style.display = this.checked ? 'block' : 'none';"> <label for="figado-normal">Normal</label><br>
        <textarea id="figado-normal-texto" style="display: none;">Fígado de dimensões normais e contornos regulares.</textarea>

        <input type="checkbox" id="hepatopatia-cronica" onclick="document.getElementById('hepatopatia-cronica-texto').style.display = this.checked ? 'block' : 'none';"> <label for="hepatopatia-cronica">Hepatopatia crônica</label><br>
        <textarea id="hepatopatia-cronica-texto" style="display: none;">Fígado com sinais de hepatopatia crônica caracterizados por contornos lobulados, bordos rombos e parênquima discretamente heterogêneo.</textarea>

        <input type="checkbox" id="hepatopatia-congestiva" onclick="document.getElementById('hepatopatia-congestiva-texto').style.display = this.checked ? 'block' : 'none';"> <label for="hepatopatia-congestiva">Hepatopatia congestiva</label><br>
        <textarea id="hepatopatia-congestiva-texto" style="display: none;">Fígado de dimensões aumentadas e bordos rombos. Distúrbio perfusional difuso do parênquima hepático, achados sugestivos de hepatopatia congestiva.</textarea>

        <input type="checkbox" id="esteatose" onclick="document.getElementById('esteatose-texto').style.display = this.checked ? 'block' : 'none';"> <label for="esteatose">Esteatose</label><br>
        <textarea id="esteatose-texto" style="display: none;">Fígado com sinais de leve deposição difusa de gordura no parênquima.</textarea>
        
        <input type="checkbox" id="hemangioma" onclick="document.getElementById('hemangioma-texto').style.display = this.checked ? 'block' : 'none';"> <label for="hemangioma">Hemangioma</label><br>
        <textarea id="hemangioma-texto" style="display: none;">Formação nodular com realce globuliforme pelo contraste, tendendo a homogeneização nas fases tardias, compatível com hemangioma.</textarea>

        <input type="checkbox" id="hiperplasia-nodular-focal" onclick="document.getElementById('hiperplasia-nodular-focal-texto').style.display = this.checked ? 'block' : 'none';"> <label for="hiperplasia-nodular-focal">Hiperplasia nodular focal</label><br>
        <textarea id="hiperplasia-nodular-focal-texto" style="display: none;">Nódulo isoatenuante de contornos lobulados, apresentando realce arterial e cicatriz central que realça tardiamente pelo contraste, compatível com hiperplasia nodular focal.</textarea>

        <input type="checkbox" id="adenoma" onclick="document.getElementById('adenoma-texto').style.display = this.checked ? 'block' : 'none';"> <label for="adenoma">Adenoma</label><br>  
        <textarea id="adenoma-texto" style="display: none;">Nódulo circunscrito, hipoatenuante que apresenta realce arterial pelo meio de contraste, não sendo caracterizado nas fases portal e tardia, aspecto sugestivo de adenoma hepático.</textarea>

        <input type="checkbox" id="chc" onclick="document.getElementById('chc-texto').style.display = this.checked ? 'block' : 'none';"> <label for="chc">Carcinoma hepatocelular (CHC)</label><br>
        <textarea id="chc-texto" style="display: none;">Lesão sólida hipervascularizada com lavagem rápida do meio de contraste, compatível com carcinoma hepatocelular (CHC). Classificação LI-RADS 5.</textarea>

        <input type="checkbox" id="metastases" onclick="document.getElementById('metastases-texto').style.display = this.checked ? 'block' : 'none';"> <label for="metastases">Metástases</label><br>
        <textarea id="metastases-texto" style="display: none;">Múltiplos nódulos hipovasculares, de limites mal definidos, por vezes confluentes, distribuídos difusamente pelo parênquima hepático, compatíveis com implantes secundários.</textarea>

        <input type="checkbox" id="abscesso" onclick="document.getElementById('abscesso-texto').style.display = this.checked ? 'block' : 'none';"> <label for="abscesso">Abscesso</label><br>
        <textarea id="abscesso-texto" style="display: none;">Formação heterogênea, predominantemente hipodensa, com realce periférico e septos internos, associado a edema perilesional, achados sugestivos de abscesso hepático.</textarea>

        <input type="checkbox" id="esquistossomose" onclick="document.getElementById('esquistossomose-texto').style.display = this.checked ? 'block' : 'none';"> <label for="esquistossomose">Esquistossomose</label><br>
        <textarea id="esquistossomose-texto" style="display: none;">Fígado com fibrose periportal, contornos lobulados e calcificações em parênquima, achados compatíveis com esquistossomose hepatoesplênica.</textarea>

        <input type="checkbox" id="cirrose" onclick="document.getElementById('cirrose-texto').style.display = this.checked ? 'block' : 'none';"> <label for="cirrose">Cirrose</label><br>
        <textarea id="cirrose-texto" style="display: none;">Fígado de dimensões reduzidas, com contornos nodulares, atrofia do lobo direito e hipertrofia relativa do lobo caudado, aspectos compatíveis com cirrose.</textarea>

        <textarea id="figado-outros" placeholder="Outros achados do fígado"></textarea>
    </p>
</div>

<div class="laudo-container">
    <h2>Vias biliares:</h2>
    <p>
        <input type="checkbox" id="vias-biliares-normais" onclick="document.getElementById('vias-biliares-normais-texto').style.display = this.checked ? 'block' : 'none';"> <label for="vias-biliares-normais">Normais</label><br>
        <textarea id="vias-biliares-normais-texto" style="display: none;">Vias biliares intra e extra-hepáticas de calibre normal.</textarea>

        <input type="checkbox" id="colecistite" onclick="document.getElementById('colecistite-texto').style.display = this.checked ? 'block' : 'none';"> <label for="colecistite">Colecistite</label><br>
        <textarea id="colecistite-texto" style="display: none;">Vesícula biliar distendida, com paredes espessadas e realce parietal, associada a densificação da gordura adjacente, compatível com colecistite aguda.</textarea>

        <input type="checkbox" id="colelitíase" onclick="document.getElementById('colelitíase-texto').style.display = this.checked ? 'block' : 'none';"> <label for="colelitíase">Colelitíase</label><br>
        <textarea id="colelitíase-texto" style="display: none;">Presença de cálculos no interior da vesícula biliar.</textarea>

        <input type="checkbox" id="colangite" onclick="document.getElementById('colangite-texto').style.display = this.checked ? 'block' : 'none';"> <label for="colangite">Colangite</label><br>
        <textarea id="colangite-texto" style="display: none;">Dilatação e irregularidade das vias biliares intra-hepáticas associado a realce parietal, achados sugestivos de colangite.</textarea>

        <input type="checkbox" id="colangiocarcinoma" onclick="document.getElementById('colangiocarcinoma-texto').style.display = this.checked ? 'block' : 'none';"> <label for="colangiocarcinoma">Colangiocarcinoma</label><br>
        <textarea id="colangiocarcinoma-texto" style="display: none;">Lesão infiltrativa mal delimitada com realce progressivo ao meio de contraste na topografia das vias biliares, determinando dilatação a montante, sugestiva de colangiocarcinoma.</textarea>

        <input type="checkbox" id="neoplasia-vesicula" onclick="document.getElementById('neoplasia-vesicula-texto').style.display = this.checked ? 'block' : 'none';"> <label for="neoplasia-vesicula">Neoplasia da vesícula biliar</label><br>
        <textarea id="neoplasia-vesicula-texto" style="display: none;">Espessamento parietal irregular da vesícula biliar com realce heterogêneo, associado a linfonodomegalias adjacentes, suspeito para neoplasia primária vesicular.</textarea>

        <textarea id="vias-biliares-outros" placeholder="Outros achados das vias biliares"></textarea>  
    </p>
</div>

<div class="laudo-container">
    <h2>Pâncreas:</h2>
    <p>
        <input type="checkbox" id="pancreas-normal" onclick="document.getElementById('pancreas-normal-texto').style.display = this.checked ? 'block' : 'none';"> <label for="pancreas-normal">Normal</label><br>
        <textarea id="pancreas-normal-texto" style="display: none;">Pâncreas de dimensões normais, contornos regulares e densidade homogênea, sem alterações.</textarea>

        <input type="checkbox" id="pancreatite-aguda" onclick="document.getElementById('pancreatite-aguda-texto').style.display = this.checked ? 'block' : 'none';"> <label for="pancreatite-aguda">Pancreatite aguda</label><br>  
        <textarea id="pancreatite-aguda-texto" style="display: none;">Aumento das dimensões do pâncreas, com limites mal definidos e densificação dos planos adiposos peripancreáticos, compatível com pancreatite aguda.</textarea>
        
        <input type="checkbox" id="pancreatite-cronica" onclick="document.getElementById('pancreatite-cronica-texto').style.display = this.checked ? 'block' : 'none';"> <label for="pancreatite-cronica">Pancreatite crônica</label><br>
        <textarea id="pancreatite-cronica-texto" style="display: none;">Pâncreas de dimensões reduzidas, com contornos lobulados, calcificações grosseiras em parênquima e dilatação do ducto pancreático principal, achados compatíveis com pancreatite crônica.</textarea>

        <input type="checkbox" id="neoplasia-pancreas" onclick="document.getElementById('neoplasia-pancreas-texto').style.display = this.checked ? 'block' : 'none';"> <label for="neoplasia-pancreas">Neoplasia pancreática</label><br>
        <textarea id="neoplasia-pancreas-texto" style="display: none;">Lesão sólida pancreática, hipoatenuante e de limites irregulares, determinando dilatação do ducto pancreático principal, com importante atrofia do corpo e cauda pancreáticos, provável neoplasia primária.</textarea>

        <input type="checkbox" id="neoplasia-intraductal" onclick="document.getElementById('neoplasia-intraductal-texto').style.display = this.checked ? 'block' : 'none';"> <label for="neoplasia-intraductal">Neoplasia mucinosa papilar intraductal (IPMN)</label><br>
        <textarea id="neoplasia-intraductal-texto" style="display: none;">Formação cística no ducto pancreático com comunicação ductal, associado a discreta dilatação do ducto pancreático principal, suspeita para IPMN de ducto principal.</textarea>

        <textarea id="pancreas-outros" placeholder="Outros achados do pâncreas"></textarea>
    </p>
</div>

<div class="laudo-container">
    <h2>Baço:</h2>
    <p>
        <input type="checkbox" id="baco-normal" onclick="document.getElementById('baco-normal-texto').style.display = this.checked ? 'block' : 'none';"> <label for="baco-normal">Normal</label><br>
        <textarea id="baco-normal-texto" style="display: none;">Baço de dimensões normais, contornos regulares e textura homogênea.</textarea>

        <input type="checkbox" id="esplenomegalia" onclick="document.getElementById('esplenomegalia-texto').style.display = this.checked ? 'block' : 'none';"> <label for="esplenomegalia">Esplenomegalia</label><br>
        <textarea id="esplenomegalia-texto" style="display: none;">Baço apresentando dimensões aumentadas, medindo cerca de XX cm no maior eixo, caracterizando esplenomegalia.</textarea>

        <input type="checkbox" id="infarto-esplenico" onclick="document.getElementById('infarto-esplenico-texto').style.display = this.checked ? 'block' : 'none';"> <label for="infarto-esplenico">Infarto esplênico</label><br>
        <textarea id="infarto-esplenico-texto" style="display: none;">Área focal hipoatenuante de formato triangular com base na cápsula esplênica, compatível com infarto esplênico.</textarea>

        <textarea id="baco-outros" placeholder="Outros achados do baço"></textarea>
    </p>
</div>

<div class="laudo-container">
    <h2>Trato gastrointestinal:</h2>
    <p>
        <input type="checkbox" id="estomago-normal" onclick="document.getElementById('estomago-normal-texto').style.display = this.checked ? 'block' : 'none';"> <label for="estomago-normal">Estômago normal</label><br>  
        <textarea id="estomago-normal-texto" style="display: none;">Est
Copy


Claude does not have the ability to run the code it generates yet.
KT
continue! muito bem, vamos fazer de todos lá

Perfeito! Vamos continuar adicionando as descrições para cada achado possível. Aqui está o restante do template HTML com as áreas de texto associadas a cada achado:


Copy code
        <input type="checkbox" id="neoplasia-gastrica" onclick="document.getElementById('neoplasia-gastrica-texto').style.display = this.checked ? 'block' : 'none';"> <label for="neoplasia-gastrica">Neoplasia gástrica</label><br>
        <textarea id="neoplasia-gastrica-texto" style="display: none;">Espessamento parietal irregular e assimétrico do estômago, associado a linfonodomegalias adjacentes, suspeito para neoplasia gástrica.</textarea>

        <input type="checkbox" id="lesao-duodenal" onclick="document.getElementById('lesao-duodenal-texto').style.display = this.checked ? 'block' : 'none';"> <label for="lesao-duodenal">Lesão duodenal</label><br>
        <textarea id="lesao-duodenal-texto" style="display: none;">Espessamento parietal focal e assimétrico do duodeno, podendo corresponder a lesão inflamatória ou neoplásica.</textarea>

        <input type="checkbox" id="doenca-inflamatoria-intestinal" onclick="document.getElementById('doenca-inflamatoria-intestinal-texto').style.display = this.checked ? 'block' : 'none';"> <label for="doenca-inflamatoria-intestinal">Doença inflamatória intestinal</label><br>
        <textarea id="doenca-inflamatoria-intestinal-texto" style="display: none;">Espessamento parietal difuso e simétrico das alças intestinais, associado a realce mucoso e densificação da gordura mesentérica, sugestivo de doença inflamatória intestinal em atividade.</textarea>

        <input type="checkbox" id="neoplasia-colorretal" onclick="document.getElementById('neoplasia-colorretal-texto').style.display = this.checked ? 'block' : 'none';"> <label for="neoplasia-colorretal">Neoplasia colorretal</label><br>
        <textarea id="neoplasia-colorretal-texto" style="display: none;">Espessamento parietal irregular e assimétrico do cólon, com redução da luz intestinal, associado a linfonodomegalias regionais, compatível com neoplasia colorretal.</textarea>

        <textarea id="trato-gastrointestinal-outros" placeholder="Outros achados do trato gastrointestinal"></textarea>
    </p>
</div>

<div class="laudo-container">
    <h2>Apêndice:</h2>
    <p>
        <input type="checkbox" id="apendice-normal" onclick="document.getElementById('apendice-normal-texto').style.display = this.checked ? 'block' : 'none';"> <label for="apendice-normal">Normal</label><br>
        <textarea id="apendice-normal-texto" style="display: none;">Apêndice cecal de características habituais, sem alterações.</textarea>

        <input type="checkbox" id="apendicite" onclick="document.getElementById('apendicite-texto').style.display = this.checked ? 'block' : 'none';"> <label for="apendicite">Apendicite</label><br>
        <textarea id="apendicite-texto" style="display: none;">Apêndice cecal espessado, com realce parietal, associado a densificação da gordura adjacente, compatível com apendicite aguda.</textarea>

        <textarea id="apendice-outros" placeholder="Outros achados do apêndice"></textarea>
    </p>
</div>

<div class="laudo-container">
    <h2>Rins:</h2>
    <p>
        <input type="checkbox" id="rins-normais" onclick="document.getElementById('rins-normais-texto').style.display = this.checked ? 'block' : 'none';"> <label for="rins-normais">Normais</label><br>
        <textarea id="rins-normais-texto" style="display: none;">Rins tópicos, de dimensões normais, contornos regulares e líquido no seio renal.</textarea>

        <textarea id="rins-anormais" placeholder="Achados renais anormais"></textarea>
    </p>
</div>

<div class="laudo-container">
    <h2>Adrenais:</h2>   
    <p>
        <input type="checkbox" id="adrenais-normais" onclick="document.getElementById('adrenais-normais-texto').style.display = this.checked ? 'block' : 'none';"> <label for="adrenais-normais">Normais</label><br>
        <textarea id="adrenais-normais-texto" style="display: none;">Glândulas adrenais de aspecto usual, sem alterações significativas.</textarea>

        <textarea id="adrenais-anormais" placeholder="Achados das adrenais anormais"></textarea>
    </p>
</div>

<div class="laudo-container">  
    <h2>Cavidade peritoneal:</h2>
    <p>
        <input type="checkbox" id="liquido-livre" onclick="document.getElementById('liquido-livre-texto').style.display = this.checked ? 'block' : 'none';"> <label for="liquido-livre">Líquido livre</label><br>
        <textarea id="liquido-livre-texto" style="display: none;">Presença de líquido livre na cavidade peritoneal, mais proeminente nas goteiras parietocólicas e na pelve.</textarea>

        <input type="checkbox" id="carcinomatose" onclick="document.getElementById('carcinomatose-texto').style.display = this.checked ? 'block' : 'none';"> <label for="carcinomatose">Carcinomatose peritoneal</label><br>
        <textarea id="carcinomatose-texto" style="display: none;">Espessamento nodular e irregular do peritônio, com densificação da gordura mesentérica e líquido livre associado, achados compatíveis com carcinomatose peritoneal.</textarea>

        <textarea id="cavidade-peritoneal-outros" placeholder="Outros achados da cavidade peritoneal"></textarea>  
    </p>
</div>

<div class="laudo-container">
    <h2>Hérnias:</h2>
    <p>  
        <textarea id="hernias" placeholder="Descrição de hérnias"></textarea>
    </p>
</div>

<div class="laudo-container">
    <h2>Ossos:</h2>
    <p>
        <input type="checkbox" id="ossos-normais" onclick="document.getElementById('ossos-normais-texto').style.display = this.checked ? 'block' : 'none';"> <label for="ossos-normais">Normais</label><br>
        <textarea id="ossos-normais-texto" style="display: none;">Estruturas ósseas de aspecto habitual, sem alterações significativas.</textarea>

        <input type="checkbox" id="lesoes-osteoliticas" onclick="document.getElementById('lesoes-osteoliticas-texto').style.display = this.checked ? 'block' : 'none';"> <label for="lesoes-osteoliticas">Lesões osteolíticas</label><br>
        <textarea id="lesoes-osteoliticas-texto" style="display: none;">Presença de lesões osteolíticas na coluna vertebral e ossos da bacia, com aspecto sugestivo de implantes secundários.</textarea>
      
        <input type="checkbox" id="lesoes-osteoblasticas" onclick="document.getElementById('lesoes-osteoblasticas-texto').style.display = this.checked ? 'block' : 'none';"> <label for="lesoes-osteoblasticas">Lesões osteoblásticas</label><br>
        <textarea id="lesoes-osteoblasticas-texto" style="display: none;">Presença de lesões osteoblásticas na coluna vertebral, costelas e bacia, sugestivas de metástases ósseas.</textarea>

        <textarea id="ossos-outros" placeholder="Outros achados ósseos"></textarea>
    </p>
</div>

<div class="laudo-container">
    <h2>Conclusão e Impressão Diagnóstica:</h2>
    <p>
        <textarea id="conclusao" placeholder="Conclusão e impressão diagnóstica"></textarea>    
    </p>
</div>

<div class="laudo-container">
    <h2>Comparação com exames anteriores:</h2>
    <p>
        <textarea id="comparacao-exames-anteriores" placeholder="Comparação com exames anteriores"></textarea>
    </p>
</div>
</body> </html>
Com este template, o radiologista pode selecionar os achados relevantes e a descrição correspondente aparecerá automaticamente na área de texto associada. Isso facilita a criação do laudo, pois o radiologista pode simplesmente copiar e colar as descrições pertinentes.

Além disso, mantive as áreas de texto livre para "Outros achados" em cada categoria, permitindo que o radiologista insira descrições adicionais conforme necessário.

Espero que este template atenda às suas necessidades! Se você tiver mais alguma sugestão ou precisar de ajuda adicional, por favor, me avise.

Copy


Claude does not have the ability to run the code it generates yet.
KT
leia meu pdf e inclua todos os achados

Com base no documento PDF fornecido, aqui está o template HTML atualizado com todas as descrições de achados incluídas:

<!DOCTYPE html> <html lang="pt"> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>Plataforma de Laudos Radiológicos - TC de Abdome</title> <style> body { font-family: Arial, sans-serif; padding: 20px; } h1, h2 { text-align: center; } .laudo-container { margin-bottom: 30px; } textarea { width: 100%; height: 100px; } </style> </head> <body> <h1>Plataforma de Laudos Radiológicos - TC de Abdome</h1>

Copy code
<div class="laudo-container">
    <h2>Fígado:</h2>
    <p>
        <input type="checkbox" id="figado-normal" onclick="document.getElementById('figado-normal-texto').style.display = this.checked ? 'block' : 'none';"> <label for="figado-normal">Normal</label><br>
        <textarea id="figado-normal-texto" style="display: none;">Fígado de dimensões normais e contornos regulares.</textarea>

        <input type="checkbox" id="lesao-hepatica-inespecifica" onclick="document.getElementById('lesao-hepatica-inespecifica-texto').style.display = this.checked ? 'block' : 'none';"> <label for="lesao-hepatica-inespecifica">Lesão hepática inespecífica</label><br>
        <textarea id="lesao-hepatica-inespecifica-texto" style="display: none;">Fígado de dimensões normais e contornos regulares. Formação hipoatenuante no segmento V, medindo 0,6 cm, de aspecto tomográfico inconclusivo devido às suas reduzidas dimensões.</textarea>

        <input type="checkbox" id="hemangioma-hepatico" onclick="document.getElementById('hemangioma-hepatico-texto').style.display = this.checked ? 'block' : 'none';"> <label for="hemangioma-hepatico">Hemangioma hepático</label><br>
        <textarea id="hemangioma-hepatico-texto" style="display: none;">Lesão com realce periférico ao meio de contraste no segmento VI, medindo 2,5 cm, compatível com hemangioma.</textarea>

        <input type="checkbox" id="hemangioma-gigante" onclick="document.getElementById('hemangioma-gigante-texto').style.display = this.checked ? 'block' : 'none';"> <label for="hemangioma-gigante">Hemangioma gigante</label><br>
        <textarea id="hemangioma-gigante-texto" style="display: none;">Fígado de dimensões aumentadas, apresentando volumosa lesão expansiva de contornos lobulados, que ocupa praticamente todos os segmentos hepáticos, poupando parte dos segmentos II, III, V e VI. Apresenta realce periférico, globuliforme, descontínuo e centrípeto, de padrão compatível com hemangioma hepático. Nota-se o centro hipocontrastante, podendo representar área de hialinização, com algumas calcificações grosseiras de permeio. Mede 23 x 26 x 20 cm.</textarea>

        <input type="checkbox" id="hemangiomatose" onclick="document.getElementById('hemangiomatose-texto').style.display = this.checked ? 'block' : 'none';"> <label for="hemangiomatose">Hemangiomatose</label><br>
        <textarea id="hemangiomatose-texto" style="display: none;">Fígado com hipertrofia do caudado, contornos ondulados, bordas rombas e atenuação heterogênea, achados indicativos de hepatopatia crônica. Focos hipervascularizados esparsos pelo parênquima, inespecíficos.</textarea>

        <input type="checkbox" id="hiperplasia-nodular-focal" onclick="document.getElementById('hiperplasia-nodular-focal-texto').style.display = this.checked ? 'block' : 'none';"> <label for="hiperplasia-nodular-focal">Hiperplasia nodular focal</label><br>
        <textarea id="hiperplasia-nodular-focal-texto" style="display: none;">Nódulo sólido ovalado no segmento VI/VII, hipervascularizado, com foco central não contrastante na fase arterial e homogeneização em relação ao parênquima hepático nas fases tardias, porém com persistência de foco central de realce. O aspecto é mais comumente observado em casos de hiperplasia nodular focal.</textarea>

        <input type="checkbox" id="hiperplasia-nodular-focal-androgenos" onclick="document.getElementById('hiperplasia-nodular-focal-androgenos-texto').style.display = this.checked ? 'block' : 'none';"> <label for="hiperplasia-nodular-focal-androgenos">Hiperplasia nodular focal (Paciente com uso de andrógenos)</label><br>
        <textarea id="hiperplasia-nodular-focal-androgenos-texto" style="display: none;">Nódulo sólido hipervascularizado com 4,7 cm, periférica no segmento II hepático com finas traves de menor densidade que se realçam tardiamente. Tal lesão tem componente exofítico, a ponto de exercer compressão sobre o fundo gástrico.</textarea>

        <input type="checkbox" id="adenoma" onclick="document.getElementById('adenoma-texto').style.display = this.checked ? 'block' : 'none';"> <label for="adenoma">Adenoma</label><br>
        <textarea id="adenoma-texto" style="display: none;">Nódulo circunscrito, hipoatenuante que apresenta realce arterial pelo meio de contraste, não sendo caracterizado nas fases portal e tardia, localizado no segmento 3, medindo 3,0 cm.</textarea>

        <input type="checkbox" id="adenoma-sangramento" onclick="document.getElementById('adenoma-sangramento-texto').style.display = this.checked ? 'block' : 'none';"> <label for="adenoma-sangramento">Adenoma (Sangramento)</label><br>
        <textarea id="adenoma-sangramento-texto" style="display: none;">Lesão expansiva hipervascularizada de margens lobuladas no segmento IVa e VIII anterior e em contato com as veias hepáticas direita e média em suas origens, medindo 7,5 cm e apresentando conteúdo liquefeito central que se comunica com o acúmulo líquido pouco denso na região subcapsular do lobo direito.</textarea>

        <input type="checkbox" id="adenoma-inflamatorio" onclick="document.getElementById('adenoma-inflamatorio-texto').style.display = this.checked ? 'block' : 'none';"> <label for="adenoma-inflamatorio">Adenoma (Inflamatório)</label><br>
        <textarea id="adenoma-inflamatorio-texto" style="display: none;">Fígado de dimensões aumentadas e com sinais de leve deposição de gordura no parênquima. Múltiplos nódulos com sinal semelhante ao do parênquima hepático nas sequências ponderadas em T1, hipervascularizados e com realce persistente pelo meio de contraste compatíveis com adenomas. Os maiores nódulos localizam-se nos segmentos VI e VII medindo 14,0 cm, este determinando compressão da veia hepática direita, e nos segmentos II e III, medindo 8,0 cm.</textarea>

        <input type="checkbox" id="figado-transplantado-complicacoes" onclick="document.getElementById('figado-transplantado-complicacoes-texto').style.display = this.checked ? 'block' : 'none';"> <label for="figado-transplantado-complicacoes">Fígado transplantado com dilatação de vias biliares e coleção</label><br>
        <textarea id="figado-transplantado-complicacoes-texto" style="display: none;">Fígado transplantado de dimensões normais, contornos regulares, com atenuação discretamente heterogênea e leve distúrbio perfusional. Foco hipodenso alongado na periferia do segmento VI, provável sítio de biópsia. Anastomose arterial pérvia, com irregularidade na emergência da artéria hepática própria. Anastomoses portal e venosa sem particularidades. Ectasia e realce parietal das vias biliares intra-hepáticas, estendendo-se até o plano da anastomose duodenal, onde se observa formação líquida de cerca de 4 cm bloqueada entre o hilo hepático e a segunda porção duodenal, que admite biloma e menos provavelmente dilatação focal do colédoco pré-anastomótico.</textarea>

        <input type="checkbox" id="hepatopatia-cronica" onclick="document.getElementById('hepatopatia-cronica-texto').style.display = this.checked ? 'block' : 'none';"> <label for="hepatopatia-cronica">Hepatopatia Crônica</label><br>
        <textarea id="hepatopatia-cronica-texto" style="display: none;">Fígado com hipertrofia do lobo caudado e segmento lateral do lobo esquerdo, contornos algo lobulados, bordos rombos e parênquima discretamente e difusamente heterogêneo, compatível com hepatopatia crônica.</textarea>

        <input type="checkbox" id="hepatopatia-congestiva" onclick="document.getElementById('hepatopatia-congestiva-texto').style.display = this.checked ? 'block' : 'none';"> <label for="hepatopatia-congestiva">Hepatopatia Congestiva</label><br>
        <textarea id="hepatopatia-congestiva-texto" style="display: none;">Fígado de dimensões aumentadas e bordos rombos. Distúrbio perfusional difuso do parênquima hepático (aspecto em "noz moscada"), com sinais de refluxo do meio de contraste para as veias hepáticas, achados sugestivos de hepatopatia congestiva.</textarea>
        
        <input type="checkbox" id="hipertensao-portal" onclick="document.getElementById('hipertensao-portal-texto').style.display = this.checked ? 'block' : 'none';"> <label for="hipertensao-portal">Hipertensão Portal</label><br>
        <textarea id="hipertensao-portal-texto" style="display: none;">Veias porta e esplênica de calibre aumentado. Circulação colateral de pequeno/médio calibre no plexo gastro-esofágico, no trajeto das veias gástricas curtas e esquerda, periesplênica, peripancreática e mesentérica. Varizes perigástricas, periesplênica, peripancreáticas.</textarea>

        <input type="checkbox" id="transformacao-cavernomatosa" onclick="document.getElementById('transformacao-cavernomatosa-texto').style.display = this.checked ? 'block' : 'none';"> <label for="transformacao-cavernomatosa">Transformação Cavernomatosa</label><br>
        <textarea id="transformacao-cavernomatosa-texto" style="display: none;">Sinais de transformação cavernomatosa portal no hilo hepático associada a aumento do calibre da veia esplênica, dilatação significativa da veia gástrica esquerda, colaterais no hilo esplênico, fundo gástrico e periesofágicas. Hepatopatia crônica com sinais de hipertensão portal e fibrose periportal.</textarea>

        <input type="checkbox" id="trombose-portal-hematica-tumoral" onclick="document.getElementById('trombose-portal-hematica-tumoral-texto').style.display = this.checked ? 'block' : 'none';"> <label for="trombose-portal-hematica-tumoral">Trombose Portal (Hemática e Tumoral)</label><br>
        <textarea id="trombose-portal-hematica-tumoral-texto" style="display: none;">Trombose hemática parcial no tronco da veia porta, confluência esplenomesentérica e a porção mais superior da veia mesentérica superior. Trombose tumoral em tributária da veia hepática média, portanto passando a lesão a ser classificada como (LI-RADS TIV).</textarea>

        <input type="checkbox" id="trombose-cronica-veia-porta" onclick="document.getElementById('trombose-cronica-veia-porta-texto').style.display = this.checked ? 'block' : 'none';"> <label for="trombose-cronica-veia-porta">Trombose crônica da veia porta</label><br>
        <textarea id="trombose-cronica-veia-porta-texto" style="display: none;">Fígado de dimensões aumentadas à custa do lobo caudado, que apresenta contornos rombos. Lobos direito e esquerdo de dimensões normais. Distúrbio perfusional arterial transitório periférico, relacionado à trombose crônica da veia porta. Trombose crônica do ramo esquerdo da veia porta (não opacificado). Tronco da veia porta, ramo portal direito e ramo direito para o segmento posterior bastante afilados. Ramo para o segmento anterior direito não opacificado.</textarea>

        <input type="checkbox" id="colangiopatia-portal-trombose-cronica" onclick="document.getElementById('colangiopatia-portal-trombose-cronica-texto').style.display = this.checked ? 'block' : 'none';"> <label for="colangiopatia-portal-trombose-cronica">Colangiopatia portal, trombose crônica da porta, transformação cavernomatosa</label><br>
        <textarea id="colangiopatia-portal-trombose-cronica-texto" style="display: none;">Trombose crônica da veia porta, com transformação cavernomatosa, observando-se múltiplas colaterais, com varizes de fino e médio calibre no hilo hepático, periportais e peribiliares. Tais colaterais determinam leve dilatação das vias biliares à montante, compatível com colangiopatia portal. Sinais de hipertensão portal, com circulação colateral perigástrica, hilar esplênica, além de varizes periesofágicas de moderado calibre, além de esplenomegalia homogênea.</textarea>

        <input type="checkbox" id="hepatopata-fluxo-hepatofugal" onclick="document.getElementById('hepatopata-fluxo-hepatofugal-texto').style.display = this.checked ? 'block' : 'none';"> <label for="hepatopata-fluxo-hepatofugal">Hepatopata, possível fluxo hepatofugal</label><br>
        <textarea id="hepatopata-fluxo-hepatofugal-texto" style="display: none;">Fígado de contornos irregulares, dimensões globalmente reduzidas com proeminência relativa do lobo caudado e segmentos laterais do lobo esquerdo, caracterizando hepatopatia crônica.
Copy


Claude does not have the ability to run the code it generates yet.
KT
Yes ! go on

Apresenta atenuação grosseiramente heterogênea. Múltiplas lesões hipovascularizadas esparsas, medindo até 1,0 cm, indeterminadas (LIRADS 3). Não há lesões hipervascularizadas com fluxo rápido (washout) que sugiram carcinoma hepatocelular. Alguns focos de calcificação / corpos livres calcificados junto à borda hepática inferior. Veia porta afilada, pérvia, porém hipocontrastada em relação ao sistema venoso mesentérico e esplênico, sugerindo fluxo portal hepatofugal. Varizes de grosso calibre no hilo esplênico, retroperitônio e perigástricas, com shunt gastrorrenal/mesenterorrenal.</textarea>


Copy code
        <input type="checkbox" id="hepatopatia-nodulo-lirads5" onclick="document.getElementById('hepatopatia-nodulo-lirads5-texto').style.display = this.checked ? 'block' : 'none';"> <label for="hepatopatia-nodulo-lirads5">Hepatopatia com nódulo LIRADS-5</label><br>
        <textarea id="hepatopatia-nodulo-lirads5-texto" style="display: none;">Sinais de hepatopatia crônica caracterizada por proeminência dos segmentos laterais esquerdos e do lobo caudado e contornos lobulados. Nódulo hipervascularizado com "washout" e pseudocápsula no segmento II, medindo 1,7cm, compatível com carcinoma hepatocelular (LIRADS 5). Tem contato com o ramo portal segmentar, que se mantem pérvio.</textarea>

        <input type="checkbox" id="lirads5-lirads-tiv" onclick="document.getElementById('lirads5-lirads-tiv-texto').style.display = this.checked ? 'block' : 'none';"> <label for="lirads5-lirads-tiv">LIRADS - 5 / LIRADS - TV</label><br>
        <textarea id="lirads5-lirads-tiv-texto" style="display: none;">Lesão nos segmentos VII e VIII, localizada inferiormente à área acima descrita e em continuidade com a mesma, apresentando hipervascularização e lavagem rápida ao meio de contraste (washout), medindo 4,7 cm, compatível com carcinoma hepatocelular (LIRADS 5). Trombose de aspecto tumoral no ramo direito da veia porta (LIRADS - TIV).</textarea>

        <input type="checkbox" id="chc" onclick="document.getElementById('chc-texto').style.display = this.checked ? 'block' : 'none';"> <label for="chc">CHC</label><br>
        <textarea id="chc-texto" style="display: none;">Massa sólida mal definida, hipervascularizada na fase arterial e com lavagem do meio de contraste ("washout") na fase de equilíbrio, medindo 6,6 cm, localizado nos segmentos 4a e 4b, compatível com carcinoma hepatocelular.</textarea>

        <input type="checkbox" id="chc-colangiocarcinoma" onclick="document.getElementById('chc-colangiocarcinoma-texto').style.display = this.checked ? 'block' : 'none';"> <label for="chc-colangiocarcinoma">CHC + Colangiocarcinoma (características superpostas)</label><br>
        <textarea id="chc-colangiocarcinoma-texto" style="display: none;">Massa sólida lobulada hipervascularizada acometendo todo o lobo direito, o segmento IV e parte dos segmentos II e III hepáticos, provocando acentuada retração capsular e deformação do contorno hepático e discreta ectasia das vias biliares a montante. O aspecto tomográfico dessa lesão é usualmente observado em neoplasias malignas, particularmente colangiocarcinomas, cabendo diagnóstico diferencial com tumor combinado carcinoma hepatocelular - colangiocarcinoma.</textarea>

        <input type="checkbox" id="chc-infiltrativo-trombose-tumoral" onclick="document.getElementById('chc-infiltrativo-trombose-tumoral-texto').style.display = this.checked ? 'block' : 'none';"> <label for="chc-infiltrativo-trombose-tumoral">CHC infiltrativo com trombose tumoral</label><br> 
        <textarea id="chc-infiltrativo-trombose-tumoral-texto" style="display: none;">Sinais de hepatopatia crônica caracterizados por fígado de dimensões aumentadas, bordos rombos e contornos irregulares. O parênquima apresenta-se difusamente heterogêneo com intenso distúrbio perfusional, destacando-se áreas nodulares hipoatenuantes de limites imprecisos, localizadas no segmento IV, VI e VII, medindo até 5,0 cm. Extensa trombose tumoral na veia hepática média, estendendo-se pela veia cava inferior supra-hepática até próxima ao átrio direito, medindo cerca de 5,0 cm. Trombose de parte proximal do ramo portal esquerdo e de todo o ramo direito. Tais tromboses acima descritas apresentam realce ao meio contraste, sugerindo natureza tumoral.</textarea>

        <input type="checkbox" id="budd-chiari" onclick="document.getElementById('budd-chiari-texto').style.display = this.checked ? 'block' : 'none';"> <label for="budd-chiari">Budd-Chiari</label><br>
        <textarea id="budd-chiari-texto" style="display: none;">Sinais de hepatopatia crônica caracterizados por hipertrofia relativa do lobo esquerdo e lobo caudado, contornos lobulados, bordas rombas e atenuação parenquimatosa heterogênea. Destacam-se pequenos nódulos hipervasculares (sem lavagem significativa nas fases tardias) esparsos pelo parênquima hepático medindo até 1,5 cm, indeterminados. Veia porta pérvia com calibre de 1,1 cm. Veias hepáticas e cava inferior afiladas e aparentemente não contrastadas pelo meio de contraste, sugerindo trombose crônica.</textarea>

        <input type="checkbox" id="esquistossomose" onclick="document.getElementById('esquistossomose-texto').style.display = this.checked ? 'block' : 'none';"> <label for="esquistossomose">Esquistossomose</label><br>
        <textarea id="esquistossomose-texto" style="display: none;">Fígado com redistribuição volumétrica e predomínio dos lobos esquerdo e caudado, contornos lobulados e bordos finos. Parênquima com coeficientes de atenuação heterogêneos e fibrose periportal de distribuição periférica. Veias hepáticas preservadas.</textarea>

        <input type="checkbox" id="cisto-hidatico" onclick="document.getElementById('cisto-hidatico-texto').style.display = this.checked ? 'block' : 'none';"> <label for="cisto-hidatico">Cisto Hidático</label><br>
        <textarea id="cisto-hidatico-texto" style="display: none;">Volumosa formação cística de paredes espessas e regulares, que apresentam realce ao meio de contraste, acometendo praticamente todo o lobo hepático esquerdo e determinando compressão do restante do parênquima hepático, das veias hepáticas média e esquerda e do ramo portal esquerdo da porta. Esta formação apresenta alguns finos septos de permeio (lesões-filhas?) e mede cerca de 17 x 15,3 x 16 cm. Considerar a possibilidade de lesão de natureza infecciosa (mais provavelmente cisto hidático, ou mesmo abscesso amebiano), não se afastando outras hipóteses diagnósticas.</textarea>

        <input type="checkbox" id="colangite-esclerosante-primaria" onclick="document.getElementById('colangite-esclerosante-primaria-texto').style.display = this.checked ? 'block' : 'none';"> <label for="colangite-esclerosante-primaria">Colangite Esclerosante Primária</label><br>
        <textarea id="colangite-esclerosante-primaria-texto" style="display: none;">Fígado de contornos lobulados e bordas rombas, apresentando atrofia relativa dos segmentos periféricos e aumento relativo dos segmentos centrais, sugerindo algum grau de hepatopatia provavelmente relacionada à doença biliar. Distúrbio perfusional peribiliar principalmente nos segmentos laterais do lobo esquerdo.</textarea>

        <input type="checkbox" id="fistula-arterioportal" onclick="document.getElementById('fistula-arterioportal-texto').style.display = this.checked ? 'block' : 'none';"> <label for="fistula-arterioportal">Fístula arterioportal</label><br>
        <textarea id="fistula-arterioportal-texto" style="display: none;">Enchimento precoce e aumento do calibre do ramo direito da veia porta, caracterizando fístula arterioportal.</textarea>

        <input type="checkbox" id="malformacao-abernathy" onclick="document.getElementById('malformacao-abernathy-texto').style.display = this.checked ? 'block' : 'none';"> <label for="malformacao-abernathy">Malformação de Abernathy</label><br>
        <textarea id="malformacao-abernathy-texto" style="display: none;">Sinais de shunt portossistêmico caracterizados por não individualização da veia porta, com veias mesentérica superior e esplênica confluindo para formação de vaso único com trajeto extra-hepático que drena diretamente para a veia cava inferior, sugestivo de malformação de abernathy tipo Ib.</textarea>

        <input type="checkbox" id="abscesso-hepatico" onclick="document.getElementById('abscesso-hepatico-texto').style.display = this.checked ? 'block' : 'none';"> <label for="abscesso-hepatico">Abscesso hepático</label><br>
        <textarea id="abscesso-hepatico-texto" style="display: none;">Fígado de dimensões aumentadas, contornos regulares e bordos rombos, apresentando coleção irregular de paredes espessas e multiseptada, com centro necrótico / liquefeito e realce capsular e dos septos pelo meio de contraste, no lobo hepático direito (principalmente segmentos VII e VI) e determinando extenso distúrbio perfusional hepático. A lesão mede cerca de 12,0 x 11,0 x 10,4 cm e apresenta volume aproximado de 700 mL. O conjunto dos achados é sugestivo de abscesso hepático.</textarea>

        <input type="checkbox" id="abscesso-biloma-pos-tratamento" onclick="document.getElementById('abscesso-biloma-pos-tratamento-texto').style.display = this.checked ? 'block' : 'none';"> <label for="abscesso-biloma-pos-tratamento">Abscesso hepático / Biloma infectado - Pós tto de Colangio e Esplene</label><br>
        <textarea id="abscesso-biloma-pos-tratamento-texto" style="display: none;">Lesão sólida mal delimitada nos segmentos V e VI, heterogênea, discretamente hipervascularizada, com parcial retenção tardia do meio de contraste e que provoca retração capsular, medindo 5,0 cm.</textarea>

        <input type="checkbox" id="tumor-mucinoso-hepatico" onclick="document.getElementById('tumor-mucinoso-hepatico-texto').style.display = this.checked ? 'block' : 'none';"> <label for="tumor-mucinoso-hepatico">Mucinoso hepático</label><br>
        <textarea id="tumor-mucinoso-hepatico-texto" style="display: none;">Fígado de dimensões aumentadas à custa de formação expansiva cística, com múltiplos septos irregulares, alguns deles parcialmente calcificados e algumas áreas nodulares de permeio, originária do IVA, projetando-se para a direita e deslocando o lobo direito hepático. A lesão mede aproximadamente 12,0 x 9,0 x 8,5 cm (LL x AP x CC). O padrão de imagem é sugestivo de neoplasia cística mucinosa hepática.</textarea>

        <input type="checkbox" id="metastases-hepaticas" onclick="document.getElementById('metastases-hepaticas-texto').style.display = this.checked ? 'block' : 'none';"> <label for="metastases-hepaticas">Metástase hepática:</label><br>
        <textarea id="metastases-hepaticas-texto" style="display: none;">Múltiplas lesões sólidas e com realce periférico esparsas por ambos lobos hepáticos, maiores e mais numerosas no lobo direito, onde confluem em grande massa centrada nos segmentos VII e VIII, medindo aproximadamente 15,5 cm no maior eixo, suspeitas para acometimento secundário.</textarea>

        <input type="checkbox" id="metastase-melanoma" onclick="document.getElementById('metastase-melanoma-texto').style.display = this.checked ? 'block' : 'none';"> <label for="metastase-melanoma">Metástase hepática (melanoma pé direito)</label><br>
        <textarea id="metastase-melanoma-texto" style="display: none;">Fígado de dimensões normais e contornos regulares, com atenuação preservada. Nódulo com vascularização heterogênea, centro necrótico e com realce parietal, no segmento VIII hepático compatível com acometimento secundário. Tal lesão mede 7,5 cm no maior diâmetro.</textarea>

        <textarea id="figado-outros" placeholder="Outros achados do fígado"></textarea>
    </p>
</div>

<div class="laudo-container">
    <h2>Vias biliares:</h2>
    <p>
        <input type="checkbox" id="adenomiomatose-vesicula" onclick="document.getElementById('adenomiomatose-vesicula-texto').style.display = this.checked ? 'block' : 'none';"> <label for="adenomiomatose-vesicula">Adenomiomatose da vesícula biliar</label><br>
        <textarea id="adenomiomatose-vesicula-texto" style="display: none;">Discreto espessamento do fundo vesical, compatível com adenomiomatose.</textarea>

        <input type="checkbox" id="colecistite-aguda" onclick="document.getElementById('colecistite-aguda-texto').style.display = this.checked ? 'block' : 'none';"> <label for="colecistite-aguda">Colecistite Aguda:</label><br>
        <textarea id="colecistite-aguda-texto" style="display: none;">Vesícula biliar hiperdistendida (medindo cerca de 13,5 x 5,3 cm), com paredes espessadas, associando-se borramento da gordura perivesicular que se estende à gordura da região paracólida direita e distúrbio perfusional do parênquima hepático adjacente à ves
Copy


Claude does not have the ability to run the code it generates yet.
KT
go on. till the end of the pdf

ícula biliar. O conjunto dos achados é compatível com colecistite aguda.</textarea>


Copy code
        <input type="checkbox" id="colecistite-aguda-perfurada" onclick="document.getElementById('colecistite-aguda-perfurada-texto').style.display = this.checked ? 'block' : 'none';"> <label for="colecistite-aguda-perfurada">Colecistite Aguda Perfurada:</label><br>
        <textarea id="colecistite-aguda-perfurada-texto" style="display: none;">Vesícula biliar distendida e com paredes difusamente espessadas, com área de descontinuidade da mucosa na parede fúndica e distúrbio perfusional do parênquima hepático adjacente. Há ainda outras pequenas áreas de descontinuidade da parede na região corporal posterior da vesícula. Os achados sugerem colecistite aguda com sinais de perfuração.</textarea>

        <input type="checkbox" id="colecistite-xantogranulomatosa" onclick="document.getElementById('colecistite-xantogranulomatosa-texto').style.display = this.checked ? 'block' : 'none';"> <label for="colecistite-xantogranulomatosa">Colecistite Xantugranulomatosa</label><br>
        <textarea id="colecistite-xantogranulomatosa-texto" style="display: none;">Vesícula biliar hiperdistendida, com paredes espessadas e contendo cálculos calcificados no seu interior, medindo até 5,0 cm. Algumas áreas da sua parede apresentam-se descontínuas e em contato com formações hipoatenuantes no parênquima hepático adjacente nos segmentos IV e V, aspecto que pode representar pequenos abscessos resultantes de perfuração vesicular bloqueada.</textarea>

        <input type="checkbox" id="coledocolitiase-duvidosa" onclick="document.getElementById('coledocolitiase-duvidosa-texto').style.display = this.checked ? 'block' : 'none';"> <label for="coledocolitiase-duvidosa">Coledocolitíase duvidosa</label><br>
        <textarea id="coledocolitiase-duvidosa-texto" style="display: none;">Pequena dilatação das vias biliares intra e extra-hepáticas até segmento distal do colédoco. Há aparente conteúdo hiperatenuante em sua luz em contiguidade com a papila que se apresenta proeminente (cálculo?), que poderá ser avaliado com estudo especifico.</textarea>

        <input type="checkbox" id="coledocolitiase-tumor-papila" onclick="document.getElementById('coledocolitiase-tumor-papila-texto').style.display = this.checked ? 'block' : 'none';"> <label for="coledocolitiase-tumor-papila">Coledocolitíase X Tumor de papila</label><br>
        <textarea id="coledocolitiase-tumor-papila-texto" style="display: none;">Moderada dilatação difusa das vias biliares intra e extra-hepáticas. Hepatocoledoco tem calibre de até 1,9 cm, com afilamento ao nível do segmento distal justapapilar, onde nota-se espessamento e realce parietal circunferencial e também aparente aumento da papila duodenal. O ducto pancreático principal encontra-se de calibre preservado. Os achados favorecem uma alteração relacionada à via biliar ou à papila duodenal (possivelmente neoplásica), em detrimento da hipótese de uma lesão pancreática.</textarea>

        <input type="checkbox" id="coledocolitiase-trombose-porta-disturbio-perfusional" onclick="document.getElementById('coledocolitiase-trombose-porta-disturbio-perfusional-texto').style.display = this.checked ? 'block' : 'none';"> <label for="coledocolitiase-trombose-porta-disturbio-perfusional">Coledocolitíase + Trombose de Veia Porta + Distúrbio Perfusional</label><br>
        <textarea id="coledocolitiase-trombose-porta-disturbio-perfusional-texto" style="display: none;">Fígado de dimensões normais e contornos regulares. Apresenta distúrbio perfusional difuso no lobo esquerdo, secundário a trombose do ramo esquerdo da veia porta, de aspecto recente. Nota-se aumento da vascularização arterial neste lobo, provavelmente compensatória.</textarea>

        <input type="checkbox" id="biloma-abscesso" onclick="document.getElementById('biloma-abscesso-texto').style.display = this.checked ? 'block' : 'none';"> <label for="biloma-abscesso">Biloma infectado x Abscesso</label><br>
        <textarea id="biloma-abscesso-texto" style="display: none;">Vesícula biliar não caracterizada. Derivação biliodigestiva com areobilia. Leve dilatação difusa das vias bilares, mais evidente no lobo esquerdo. Cálculos esparsos pelas vias biliares intra-hepáticas, principalmente à esquerda, já presentes na RM anterior de 26/12/12.</textarea>

        <input type="checkbox" id="lesao-papila-duvidosa-dilatacao-vias-biliares" onclick="document.getElementById('lesao-papila-duvidosa-dilatacao-vias-biliares-texto').style.display = this.checked ? 'block' : 'none';"> <label for="lesao-papila-duvidosa-dilatacao-vias-biliares">Lesão de papila duvidosa, dilatação de vias biliares</label><br>
        <textarea id="lesao-papila-duvidosa-dilatacao-vias-biliares-texto" style="display: none;">Dilatação das vias biliares intra e extra hepáticas até a porção distal do colédoco, que apresenta redução de calibre com duvidoso espessamento parietal. A papila duodenal tem aumento volumétrico. Sugere-se correlação com colangio-RM.</textarea>

        <input type="checkbox" id="colangiocarcinoma-intrahepatico" onclick="document.getElementById('colangiocarcinoma-intrahepatico-texto').style.display = this.checked ? 'block' : 'none';"> <label for="colangiocarcinoma-intrahepatico">Colangiocarcinoma - Intrahepático</label><br>
        <textarea id="colangiocarcinoma-intrahepatico-texto" style="display: none;">Grande massa sólida e hipovascularizada centrada nos segmentos IV e V hepáticos e com componente estendendo-se aos segmentos laterais do lobo esquerdo, que determina retração capsular adjacente e mede aproximadamente 15,5 cm no maior eixo. Dentre os diferenciais, deve-se considerar as possibilidadades de lesões secundárias confluentes ou de neoplasia primária hepática (colangiocarcinoma).</textarea>

        <input type="checkbox" id="colangiocarcinoma-extrahepatico" onclick="document.getElementById('colangiocarcinoma-extrahepatico-texto').style.display = this.checked ? 'block' : 'none';"> <label for="colangiocarcinoma-extrahepatico">Colangiocarcinoma - Extrahepático</label><br>
        <textarea id="colangiocarcinoma-extrahepatico-texto" style="display: none;">Espessamento parietal do colédoco distal estendendo-se do plano da cabeça pancreática a 1,4cm da confluência do ducto biliar posterior direito com o ducto hepático comum, determinando dilatação das vias biliares intra e extra-hepáticas.</textarea>

        <input type="checkbox" id="colangiocarcinoma-hilar" onclick="document.getElementById('colangiocarcinoma-hilar-texto').style.display = this.checked ? 'block' : 'none';"> <label for="colangiocarcinoma-hilar">Colangiocarcinoma - Hilar</label><br>
        <textarea id="colangiocarcinoma-hilar-texto" style="display: none;">Massa sólida infiltrativa, isoatenuante ao parênquima hepático, com mínimo realce tardio pós-contraste, medindo cerca de 2,9 x 2,6 cm, situada na confluência dos ductos hepáticos, amputando-os e determinando dilatação das vias biliares intra-hepáticas.</textarea>

        <input type="checkbox" id="tumor-vesicula-fistula-gastrica" onclick="document.getElementById('tumor-vesicula-fistula-gastrica-texto').style.display = this.checked ? 'block' : 'none';"> <label for="tumor-vesicula-fistula-gastrica">Tumor de VB + Fístula gástrica com migração de cálculo para o seu interior</label><br>
        <textarea id="tumor-vesicula-fistula-gastrica-texto" style="display: none;">Lesão irregular e mal delimitada na região corporal e fúndica da vesícula biliar que parece infiltrar o parênquima hepático no segmento IVb e a parede lateral direita do antro gástrico (de avaliação limitada neste estudo sem contraste endovenoso), suspeita para lesão primária.</textarea>

        <input type="checkbox" id="carcinoma-vesicula-biliar" onclick="document.getElementById('carcinoma-vesicula-biliar-texto').style.display = this.checked ? 'block' : 'none';"> <label for="carcinoma-vesicula-biliar">Carcinoma de VB</label><br>
        <textarea id="carcinoma-vesicula-biliar-texto" style="display: none;">Lesão expansiva de caráter infiltrativo, centrada no corpo/fundo da vesícula biliar, de formato irregular, com extenso componente necrótico interno. Apresenta infiltração extensa do parênquima hepático do segmento IV e da gordura abdominal infra-hepática, onde notam-se pequenos implantes satélites. A lesão mede cerca de 11,0 x 10,0 x 8,5 cm (CC x AP x LL) e é compatível com neoplasia primária da vesícula biliar.</textarea>

        <input type="checkbox" id="doenca-caroli" onclick="document.getElementById('doenca-caroli-texto').style.display = this.checked ? 'block' : 'none';"> <label for="doenca-caroli">Doença de Caroli</label><br>
        <textarea id="doenca-caroli-texto" style="display: none;">Fígado de dimensões aumentadas, contornos lobulados e bordos rombos. Múltiplas imagens císticas lobuladas distribuídas difusamente pelo parênquima hepático, a maior medindo 5,8 cm no segmento lateral do lobo esquerdo, algumas circundando ramos portais ("central dot sign"), que sugerem dilatações císticas das vias biliares intra-hepáticas.</textarea>

        <textarea id="vias-biliares-outros" placeholder="Outros achados das vias biliares"></textarea>
    </p>
</div>

<div class="laudo-container">
    <h2>Baço:</h2>
    <p>
        <input type="checkbox" id="sequela-infarto-esplenico" onclick="document.getElementById('sequela-infarto-esplenico-texto').style.display = this.checked ? 'block' : 'none';"> <label for="sequela-infarto-esplenico">Sequela Infarto esplênico</label><br>
        <textarea id="sequela-infarto-esplenico-texto" style="display: none;">Áreas de retrações esplênicas, sequelas de infartos prévios.</textarea>

        <textarea id="baco-outros" placeholder="Outros achados do baço"></textarea>
    </p>
</div>

<div class="laudo-container">
    <h2>Estômago:</h2>
    <p>
        <input type="checkbox" id="diverticulo-gastrico" onclick="document.getElementById('diverticulo-gastrico-texto').style.display = this.checked ? 'block' : 'none';"> <label for="diverticulo-gastrico">Divertículo gástrico</label><br>
        <textarea id="diverticulo-gastrico-texto" style="display: none;">Pequeno divertículo no fundo gástrico, medindo 2,4 cm.</textarea>

        <input type="checkbox" id="neoplasia-gastrica" onclick="document.getElementById('neoplasia-gastrica-texto').style.display = this.checked ? 'block' : 'none';"> <label for="neoplasia-gastrica">Neoplasia gástrica:</label><br>
        <textarea id="neoplasia-gastrica-texto" style="display: none;">Acentuado espessamento parietal do estômago na transição da pequena curvatura para o antro, notando-se realce ao meio de contraste, sugestivo de lesão primária. Sugere-se correlação com estudo endoscópico.</textarea>

        <input type="checkbox" id="tumor-gastrico-mucinoso" onclick="document.getElementById('tumor-gastrico-mucinoso-texto').style.display = this.checked ? 'block' : 'none';"> <label for="tumor-gastrico-mucinoso">Tumor gástrico com componente mucinoso</label><br>
        <textarea id="tumor-gastrico-mucinoso-texto" style="display: none;">Espessamento parietal do fundo e do corpo gástricos com extensão (infiltração) até o esôfago distal. Na lesão gástrica notam-se calcificações que lembram um aspecto psamomatoso, achado este encontrado em neoplasias mucinosas.</textarea>

        <input type="checkbox" id="gastrectomia-billroth-neoplasia" onclick="document.getElementById('gastrectomia-billroth-neoplasia-texto').style.display = this.checked ? 'block' : 'none';"> <label for="gastrectomia-billroth-neoplasia">Gastrectomia com reconstrução Billroth II (e neoplasia gástrica na câmara remanescente)</label><br>
        <textarea id="gastrectomia-billroth-neoplasia-texto" style="display: none;">Dilatação das vias biliares desde a porção intra-hepática até o duodeno. Discreta atrofia parenquimatosa difusa do pâncreas, com leve dilatação do ducto pancreático em toda a sua extensão. Sonda digestiva com segmento distal na alça alimentar (eferente). Sinais de gastrectomia parcial com reconstrução à Billroth II. Espessamento parietal difuso do estômago residual, compatível com neoplasia, com acometimento da anastomose da alça aferente, determinando dilatação desse segmento o que resulta na dilatação das vias biliares.</textarea>

        <input type="checkbox" id="neoplasia-gastrica-avancada" onclick="document.getElementById('neoplasia-gastrica-avancada-texto').style.display = this.checked ? 'block' : 'none';"> <label for="neoplasia-gastrica-avancada">Neoplasia Gástrica Avançada</
Copy


Claude does not have the ability to run the code it generates yet.
KT
continue, from where you stopped till all findings of the page are in

</label><br>
<textarea id="neoplasia-gastrica-avancada-texto" style="display: none;">Lesão sólida infiltrativa e sub-estenosante no antro gástrico, com extensão aproximada de 7,5 cm, determinando distensão da câmara gástrica a montante e do segmento distal esofágico, compatível com acometimento primário.</textarea>


Copy code
        <textarea id="estomago-outros" placeholder="Outros achados do estômago"></textarea>
    </p>
</div>

<div class="laudo-container">
    <h2>Pâncreas:</h2>
    <p>
        <input type="checkbox" id="pancreatite-aguda" onclick="document.getElementById('pancreatite-aguda-texto').style.display = this.checked ? 'block' : 'none';"> <label for="pancreatite-aguda">Pancreatite aguda</label><br>
        <textarea id="pancreatite-aguda-texto" style="display: none;">Aumento volumétrico difuso do pâncreas, sobretudo da região caudal, associado a densificação dos planos gordurosos peripancreáticos, estendendo-se ao hipocôndrio esquerdo, à raiz do mesentério e às fáscias pararrenais anteriores, achados sugestivos de pancreatite aguda.</textarea>

        <input type="checkbox" id="pancreatite-aguda-necrosante" onclick="document.getElementById('pancreatite-aguda-necrosante-texto').style.display = this.checked ? 'block' : 'none';"> <label for="pancreatite-aguda-necrosante">Pancreatite aguda necrosante</label><br>
        <textarea id="pancreatite-aguda-necrosante-texto" style="display: none;">Sinais de pancreatite aguda necrosante, caracterizada por acentuado aumento volumétrico de todo o pâncreas, com hiporrealce difuso, densificação da gordura peripancreática e espessamento das fáscias pararrenais. Destaca-se necrose/liquefação da maior parte do corpo e cauda pancreáticas, com esteatonecrose e acúmulos líquidos adjacentes no espaço pararrenal anterior, com focos gasosos de permeio, provavelmente infectada.</textarea>

        <input type="checkbox" id="pancreatite-aguda-edematosa" onclick="document.getElementById('pancreatite-aguda-edematosa-texto').style.display = this.checked ? 'block' : 'none';"> <label for="pancreatite-aguda-edematosa">Pancreatite Aguda Edematosa</label><br>
        <textarea id="pancreatite-aguda-edematosa-texto" style="display: none;">Aumento volumétrico difuso do pâncreas, sobretudo da região caudal, associado a densificação dos planos gordurosos peripancreáticos, estendendo-se ao hipocôndrio esquerdo, à raiz do mesentério e às fáscias pararrenais anteriores, achados sugestivos de pancreatite aguda.</textarea>

        <input type="checkbox" id="pancreatite-cronica-agudizada" onclick="document.getElementById('pancreatite-cronica-agudizada-texto').style.display = this.checked ? 'block' : 'none';"> <label for="pancreatite-cronica-agudizada">Pancreatite Crônica / Crônica agudizada</label><br>
        <textarea id="pancreatite-cronica-agudizada-texto" style="display: none;">Pâncreas difusamente afilado com cálculos/calcificações difusas, em maior concentração na cabeça. Nota-se ainda dilatação do ducto pancreático principal (0,5 cm), com pequenos focos gasosos no seu interior e em ductos secundários. Os achados sugerem pancreatite crônica. Destaca-se provável componente de agudização do processo inflamatório na cabeça pancreática, que apresenta aumento volumétrico e densificação dos planos adiposos adjacentes.</textarea>

        <input type="checkbox" id="pancreatite-cronica" onclick="document.getElementById('pancreatite-cronica-texto').style.display = this.checked ? 'block' : 'none';"> <label for="pancreatite-cronica">Pancreatite crônica</label><br>
        <textarea id="pancreatite-cronica-texto" style="display: none;">Pâncreas com atrofia parenquimatosa difusa, atenuação heterogênea com múltiplos cálculos calcificados no ducto pancreático principal e em ductos secundários em toda a sua extensão, compatível com pancreatite crônica.</textarea>

        <input type="checkbox" id="pancreatite-cronica-fistula-estomago" onclick="document.getElementById('pancreatite-cronica-fistula-estomago-texto').style.display = this.checked ? 'block' : 'none';"> <label for="pancreatite-cronica-fistula-estomago">Pancreatite crônica com fístula para o estômago</label><br>
        <textarea id="pancreatite-cronica-fistula-estomago-texto" style="display: none;">Sinais de pancreatite crônica com redução volumétrica particularmente do corpo e cauda, dilatações ductais e inúmeros cálculos no ducto principal e em ductos secundários. A dilatação do ducto pancreático principal estende-se até o colo pancreático.</textarea>

        <input type="checkbox" id="necrose-pancreatica" onclick="document.getElementById('necrose-pancreatica-texto').style.display = this.checked ? 'block' : 'none';"> <label for="necrose-pancreatica">Necrose Pancreática</label><br>
        <textarea id="necrose-pancreatica-texto" style="display: none;">Sinais de pancreatite subaguda com formação de coleção discretamente heterogênea acometendo mais de 50% do corpo e da cauda pancreática, com extensão para a pelve, compatível com necrose pancreática delimitada ("walled of necrosis"). Tal coleção desloca anteriormente o cólon descendente e sigmóide, medialmente a bexiga, útero e ovário esquerdo e mede 21,0 x 12,3 x 11,2 cm (CC x AP x LL), com volume estimado de 1500 mL.</textarea>

        <input type="checkbox" id="pseudocisto-sangramento" onclick="document.getElementById('pseudocisto-sangramento-texto').style.display = this.checked ? 'block' : 'none';"> <label for="pseudocisto-sangramento">Pseudocisto com sangramento</label><br>
        <textarea id="pseudocisto-sangramento-texto" style="display: none;">Pseudocisto adjacente à cauda pancreática com aproximadamente 400 cc de conteúdo hiperdenso, configurando um sangramento recente. Não se demonstrou sangramento ativo durante o exame.</textarea>

        <input type="checkbox" id="tumor-neuroendocrino-pancreas" onclick="document.getElementById('tumor-neuroendocrino-pancreas-texto').style.display = this.checked ? 'block' : 'none';"> <label for="tumor-neuroendocrino-pancreas">Duvidoso tumor neuroendócrino de pâncreas com cistos de retenção / pseudocistos</label><br>
        <textarea id="tumor-neuroendocrino-pancreas-texto" style="display: none;">Aparente lesão sólida hipervascular, localizada no corpo do pâncreas, mantendo contato com o ducto pancreático principal, medindo 1,1 cm. Estruturas vasculares livres. Atrofia e dilatação do ducto pancreático na cauda associada a formações císticas, medindo até 9,2 cm em conjunto, podendo corresponder a cistos de retenção/pseudocistos. Considerar a hipótese de lesão neuroendócrina.</textarea>

        <input type="checkbox" id="colecao-pos-operatorio-pancreas" onclick="document.getElementById('colecao-pos-operatorio-pancreas-texto').style.display = this.checked ? 'block' : 'none';"> <label for="colecao-pos-operatorio-pancreas">Coleção pós operatório pâncreas</label><br>
        <textarea id="colecao-pos-operatorio-pancreas-texto" style="display: none;">Acúmulo líquido com aspecto de coleção em organização adjacente à pequena curvatura gástrica, irregular, associada a densificação dos tecidos adjacentes, medindo cerca de 6,3 x 6,3 x 5,9 cm (volume de 121,7 ml). A coleção mantém amplo contato com a margem de ressecção do pâncreas remanescente (cabeça e processo uncinado), não sendo possível descartar comunicação da coleção com o ducto pancreático principal.</textarea>

        <input type="checkbox" id="lesao-cistica-pancreas-ipmn" onclick="document.getElementById('lesao-cistica-pancreas-ipmn-texto').style.display = this.checked ? 'block' : 'none';"> <label for="lesao-cistica-pancreas-ipmn">Lesão cística do pâncreas - possível IPMN</label><br>
        <textarea id="lesao-cistica-pancreas-ipmn-texto" style="display: none;">Pâncreas apresentando cisto de 2,5 x 2,0 cm na topografia do colo em aparente comunicação com o ducto pancreático principal, que pode estar relacionado a lesão mucinosa papilar intraductal e suas variantes histológicas.</textarea>

        <input type="checkbox" id="atrofia-cauda-pancreas" onclick="document.getElementById('atrofia-cauda-pancreas-texto').style.display = this.checked ? 'block' : 'none';"> <label for="atrofia-cauda-pancreas">Atrofia da cauda do pâncreas:</label><br>
        <textarea id="atrofia-cauda-pancreas-texto" style="display: none;">Processo uncinado, cabeça e corpo do pâncreas de dimensões e atenuação preservadas. Não se identifica a cauda do pâncreas. Esse achado pode ser observado em casos de obstrução focal do ducto pancreático principal ou em agenesia parcial do pâncreas dorsal, condição que pode estar relacionada com diabetes (MODY).</textarea>

        <input type="checkbox" id="neoplasia-pancreas-nao-caracterizada" onclick="document.getElementById('neoplasia-pancreas-nao-caracterizada-texto').style.display = this.checked ? 'block' : 'none';"> <label for="neoplasia-pancreas-nao-caracterizada">Neoplasia de pâncreas não caracterizado</label><br>
        <textarea id="neoplasia-pancreas-nao-caracterizada-texto" style="display: none;">Atrofia do parênquima com dilatação ductal segmentar da cauda pancreática. A despeito de não serem visibilizadas lesões sólidas no ponto de transição, a possibilidade de lesão expansiva pequena ainda pode ser considerada entre os diagnósticos diferenciais.</textarea>

        <input type="checkbox" id="tumor-cabeca-pancreas" onclick="document.getElementById('tumor-cabeca-pancreas-texto').style.display = this.checked ? 'block' : 'none';"> <label for="tumor-cabeca-pancreas">Tumor cabeça do pâncreas</label><br>
        <textarea id="tumor-cabeca-pancreas-texto" style="display: none;">Lesão sólida infiltrativa hipovascularizada e mal delimitada no aspecto lateral da cabeça pancreática, medindo 2,5 cm, compatível com neoplasia primária. A lesão amputa o colédoco intrapancreático. Determina dilatação acentuada das vias biliares e da vesícula biliar, esta que atinge a fossa ilíaca direita e apresenta alguns cálculos calcificados. Determina também dilatação do ducto pancreático principal (0,4 cm).</textarea>

        <input type="checkbox" id="tumor-pancreas-acometimento-duodenal" onclick="document.getElementById('tumor-pancreas-acometimento-duodenal-texto').style.display = this.checked ? 'block' : 'none';"> <label for="tumor-pancreas-acometimento-duodenal">Tumor de pâncreas com possível acometimento duodenal - progressão</label><br>
        <textarea id="tumor-pancreas-acometimento-duodenal-texto" style="display: none;">Houve discreto aumento das dimensões da lesão expansiva e heterogênea localizada junto a cabeça pancreática, com extensão ao lúmen da segunda e terceira porções duodenais, medindo cerca de 9,3 x 5,9 cm (media 8,0 x 5,0 cm). Destacam-se irregularidades dos contornos da parede anterior da terceira porção duodenal, associadas a densificação e estriações da gordura adjacente, sugerindo a possibilidade de acometimento além da serosa. Há ainda contato menor que 180º com a parede posterior da artéria e veia mesentérica superior, além de amplo contato com tributária jejunal.</textarea>

        <input type="checkbox" id="tumor-pancreas-trombose-tumoral-veia-porta" onclick="document.getElementById('tumor-pancreas-trombose-tumoral-veia-porta-texto').style.display = this.checked ? 'block' : 'none';"> <label for="tumor-pancreas-trombose-tumoral-veia-porta">Tumor de pâncreas com trombose tumoral da veia porta</label><br>
        <textarea id="tumor-pancreas-trombose-tumoral-veia-porta-texto" style="display: none;">Lesão hipervascular e heterogênea infiltrando o corpo e cauda do pâncreas, de limites mal definidos, em íntimo contato com a pequena curvatura gástrica e com a haste lateral da adrenal esquerda, sem nítidos planos de clivagem com essas estruturas, medindo 8,8 x 5,3 cm. O aspecto de imagem favorece a possibilidade de tumor neuroendócrino do pâncreas. A lesão infiltra a veia esplênica e estende-se à veia porta e seu ramo direito, com trombose tumoral dos mesmos e com formação de colaterais ao nível do hilo hepático.</textarea>

        <input type="checkbox" id="lesao-cistica-pancreas-necrose-delimitada" onclick="document.getElementById('lesao-cistica-pancreas-necrose-delimitada-texto').style.display = this.checked ? 'block' : 'none';"> <label for="lesao-cistica-pancreas-necrose-delimitada">Volumosa lesão cística cisto pâncreas - necrose pancreática bem delimitada</label><br>
        <textarea id="lesao-cistica-pancreas-necrose-delimitada-texto" style="display: none;">Volumosa lesão cística intrapancreática, de contornos irregulares, delimitada por cápsula fibrosa, comprometendo praticamente todo parênquima do corpo e, parcialmente, da porção cefálica e da cauda, medindo 16,0 x 9,0 x 10,5 cm (volume estimado em 800 ml). Há espessamento parietal em algumas porções, finos septos
Copy


Claude does not have the ability to run the code it generates yet.
KT
keep going

de permeio e lobulações inferiores que se insinuam em meio ao parênquima remanescente da cauda. Tal lesão é compatível com necrose pancreática bem delimitada e apresenta as seguintes relações anatômicas:</textarea>


Copy code
        <input type="checkbox" id="neoplasia-cistica-serosa" onclick="document.getElementById('neoplasia-cistica-serosa-texto').style.display = this.checked ? 'block' : 'none';"> <label for="neoplasia-cistica-serosa">Neoplasia Cística Serosa</label><br>
        <textarea id="neoplasia-cistica-serosa-texto" style="display: none;">Lesão cística que acomete o colo e o corpo do pâncreas, constituída por múltiplos microcistos centrais e por cistos maiores periféricos, medindo cerca de 5,5 cm no maior eixo (longitudinal). Não apresenta comunicação evidente com o ducto principal e encontra-se estável em relação ao exame de 03/12/2010. Restante do pâncreas de dimensões e atenuação preservadas, sem dilatação ductal. O aspecto tomográfico é usualmente observado em neoplasias císticas serosas pancreáticas.</textarea>

        <input type="checkbox" id="tumor-frantz" onclick="document.getElementById('tumor-frantz-texto').style.display = this.checked ? 'block' : 'none';"> <label for="tumor-frantz">Tumor de Frantz</label><br>
        <textarea id="tumor-frantz-texto" style="display: none;">Massa sólido-cística, predominantemente cística, com numerosas vegetações papilares internas e de contornos regulares, centrada na cabeça pancreática, comprimindo as estruturas adjacentes. Mede 15,1 x 14,8 x 10,8 cm. A lesão comprime e desloca posteriormente o tronco celíaco, as artérias esplênica, hepática comum e hepática, própria, deslocando anterior e lateralmente o duodeno e a artéria pancreatoduodenal.</textarea>

        <input type="checkbox" id="neuroendocrino-cistico-pancreas" onclick="document.getElementById('neuroendocrino-cistico-pancreas-texto').style.display = this.checked ? 'block' : 'none';"> <label for="neuroendocrino-cistico-pancreas">Neuroendócrino Cístico do PÂncreas</label><br>
        <textarea id="neuroendocrino-cistico-pancreas-texto" style="display: none;">Lesão cística de paredes discretamente espessadas, regulares e que se impregnam pelo contraste, com alguns focos de calcificação, localizada na cauda pancreática, medindo 6,0 cm. Embora não patognomônica, diante dos demais achados clínicoradiológicos da paciente, deve-se considerar tratar-se de uma neoplasia cística neuroendócrina do pâncreas.</textarea>

        <input type="checkbox" id="adenocarcinoma-tubulopapilar" onclick="document.getElementById('adenocarcinoma-tubulopapilar-texto').style.display = this.checked ? 'block' : 'none';"> <label for="adenocarcinoma-tubulopapilar">Adenocarcinoma tubulopapilar</label><br>
        <textarea id="adenocarcinoma-tubulopapilar-texto" style="display: none;">Acentuada atrofia parenquimatosa do corpo e cauda do pâncreas com dilatação ductal notando-se conteúdo tubuliforme espontaneamente hiperatenuante ocupando grande parte do ducto pancreático principal no corpo e cauda do pâncreas.</textarea>

        <input type="checkbox" id="adenocarcinoma-pancreas-acometimento-plexo-celiaco" onclick="document.getElementById('adenocarcinoma-pancreas-acometimento-plexo-celiaco-texto').style.display = this.checked ? 'block' : 'none';"> <label for="adenocarcinoma-pancreas-acometimento-plexo-celiaco">AdenoCA Pâncreas - Acometimento plexo celíaco</label><br>
        <textarea id="adenocarcinoma-pancreas-acometimento-plexo-celiaco-texto" style="display: none;">Lesão sólida infiltrativa de limites imprecisos com aproximadamente 2,0 cm na cauda do pâncreas, com extenso acometimento extrapancreático em planos retroperitoneais adjacentes a ponto de envolver circunferencialmente o tronco celíaco e seus ramos, bem como a origem da artéria mesentérica superior e infiltrar o plexo celíaco. O acometimento extrapancreático é factível de biopsia percutânea com abordagem.</textarea>

        <input type="checkbox" id="tumor-processo-uncinado" onclick="document.getElementById('tumor-processo-uncinado-texto').style.display = this.checked ? 'block' : 'none';"> <label for="tumor-processo-uncinado">Tumor processo uncinado</label><br>
        <textarea id="tumor-processo-uncinado-texto" style="display: none;">Lesão sólida infiltrativa mal delimitada no processo uncinado e na cabeça pancreática, medindo aproximadamente 3,5 cm, compatível com neoplasia primária. A lesão infiltra o colédoco intrapancreático, provocando dilatação acentuada das vias biliares e da vesícula biliar.</textarea>

        <input type="checkbox" id="tumor-processo-uncinado-acometimento-vascular-metastase-hepatica" onclick="document.getElementById('tumor-processo-uncinado-acometimento-vascular-metastase-hepatica-texto').style.display = this.checked ? 'block' : 'none';"> <label for="tumor-processo-uncinado-acometimento-vascular-metastase-hepatica">Tumor processo uncinado com acometimento vascular e metastase hepática</label><br>
        <textarea id="tumor-processo-uncinado-acometimento-vascular-metastase-hepatica-texto" style="display: none;">Fígado de dimensões normais e contornos regulares, com atenuação heterogênea, apresentando múltiplas lesões nodulares sólidas, hipovasculares, disseminadas pelo parênquima hepático (acometimento secundário). Lesão sólida infiltrativa e mal delimitada no processo uncinado do pâncreas, medindo cerca de 3,0 cm, compatível com neoplasia primária. A lesão envolve circunferencialmente a artéria e veia mesentérica superiores, determinando discretas irregularidades murais na artéria e trombose / infiltração da veia com formação de colaterais venosas adjacentes.</textarea>

        <input type="checkbox" id="tumor-papila-coledocolitiase" onclick="document.getElementById('tumor-papila-coledocolitiase-texto').style.display = this.checked ? 'block' : 'none';"> <label for="tumor-papila-coledocolitiase">Tumor de papila x Coledocolitíase</label><br>
        <textarea id="tumor-papila-coledocolitiase-texto" style="display: none;">Moderada dilatação difusa das vias biliares intra e extra-hepáticas, com redução relativamente gradual do calibre ao nível do colédoco distal justapapilar, achado que poderia ser mais bem avaliado por colangiorressonância, a critério clínico (coledocolitíase?). Discreto realce parietal tardio do colédoco justapapilar, sugerindo processo inflamatório local.</textarea>

        <textarea id="pancreas-outros" placeholder="Outros achados do pâncreas"></textarea>
    </p>
</div>

<div class="laudo-container">
    <h2>Intestino Delgado:</h2>
    <p>
        <input type="checkbox" id="ulcera-duodenal-duodenite" onclick="document.getElementById('ulcera-duodenal-duodenite-texto').style.display = this.checked ? 'block' : 'none';"> <label for="ulcera-duodenal-duodenite">Úlcera duodenal / Duodenite</label><br>
        <textarea id="ulcera-duodenal-duodenite-texto" style="display: none;">Espessamento circunferencial da parede da segunda e terceira porções duodenais, com hiperrealce mucoso e edema da submucosa. Associa-se densificação dos planos gordurosos adjacentes e pequena quantidade de líquido junto ao rebordo inferior do fígado. Espessamento e hiperrealce parietal de algumas estruturas adjacentes, do cólon ascendente, colédoco e infundíbulo da vesícula biliar, de aspecto reacional. Alguns pequenos linfonodos aumentados em número na cadeia mesentérica superior. O conjunto dos achados sugere processo inflamatório duodenal, podendo considerar hipóteses infecciosas ou, eventualmente, úlcera duodenal.</textarea>

        <input type="checkbox" id="doenca-crohn" onclick="document.getElementById('doenca-crohn-texto').style.display = this.checked ? 'block' : 'none';"> <label for="doenca-crohn">Doença de Crohn</label><br>
        <textarea id="doenca-crohn-texto" style="display: none;">Sinais de acometimento transmural das paredes do cólon sigmóide com densificação do mesentério e ingurgitamento dos vasos retos adjacentes, destacando-se realce parietal da sua parede. Associa-se coleção com conteúdo líquido e focos gasosos próximo à reflexão peritoneal medindo 6,3 x 3,6 x 2,2 cm (AP x LL x CC), volume estimado de 25mL. Não há dilatação de alças a montante. Há extensão do espessamento parietal mural para o reto, com realce de suas paredes, sem redução significativa da sua luz. Nota-se conteúdo líquido no seu interior, presença de gás na parede no seu terço distal e coleção à esquerda com nível hidroaéreo, apresentando trajeto no subcutâneo ainda sem exteriorização.</textarea>

        <input type="checkbox" id="fistula-ileo-colica-sigmoide" onclick="document.getElementById('fistula-ileo-colica-sigmoide-texto').style.display = this.checked ? 'block' : 'none';"> <label for="fistula-ileo-colica-sigmoide">Fístula Íleo-cólica cólon sigmoide</label><br>
        <textarea id="fistula-ileo-colica-sigmoide-texto" style="display: none;">Segmento da transição cólon descendente / sigmóide apresentando-se com discreto hiperrealce e espessamento parietal, além de borramento dos planos adiposos adjacentes. Notam-se pelo menos 3 fístulas deste segmento cólico com alças adjacentes de delgado, com passagem de material fecalóide, além de amplo contato com o ureter esquerdo no plano do cruzamento com os vasos ilíacos.</textarea>

        <input type="checkbox" id="diverticulo-ileal" onclick="document.getElementById('diverticulo-ileal-texto').style.display = this.checked ? 'block' : 'none';"> <label for="diverticulo-ileal">Divertículo Ileal</label><br>
        <textarea id="diverticulo-ileal-texto" style="display: none;">Divertículo espessado no íleo terminal, adjacente à válvula ileocecal, com densificação dos planos adiposos e folhetos peritoneais adjacentes e espessamento do segmento de alça correspondente. Associam-se pequenas bolhas gasosas regionais, com lâminas líquidas de permeio e linfonodos aumentados regionais. Os achados são compatíveis com diverticulite aguda de íleo com microperfuração, sem coleções. Não há pneumoperitônio livre.</textarea>

        <input type="checkbox" id="intussuscepcao-ma-rotacao" onclick="document.getElementById('intussuscepcao-ma-rotacao-texto').style.display = this.checked ? 'block' : 'none';"> <label for="intussuscepcao-ma-rotacao">Intussuscepção + Sinais de Má rotação</label><br>
        <textarea id="intussuscepcao-ma-rotacao-texto" style="display: none;">Angulo de Treitz em posição não habitual, deslocado para o hipocondrio direito, onde observa-se inversão da posição dos vasos mesentéricos superiores. Na fossa ilíaca esquerda, notam-se sinais de obstrução intestinal com intussuscepção ileo-cólica, que determina dilatação de alças a montante, sobretudo de delgado, até o nível do estômago. Pequena quantidade de líquido livre abdominal.</textarea>

        <textarea id="intestino-delgado-outros" placeholder="Outros achados do intestino delgado"></textarea>
    </p>
</div>

<div class="laudo-container">
    <h2>Apêndice:</h2>
    <p>
        <input type="checkbox" id="apendicite-inicial-apendicolito" onclick="document.getElementById('apendicite-inicial-apendicolito-texto').style.display = this.checked ? 'block' : 'none';"> <label for="apendicite-inicial-apendicolito">Apendicite inicial - Com apendicolito</label><br>
        <textarea id="apendicite-inicial-apendicolito-texto" style="display: none;">Apêndice cecal distendido em toda a sua extensão, com localização retrocecal dirigido à pequena pelve (retroperitoneal?), apresentando conteúdo líquido e paredes discretamente espessadas (até 1,2 cm de diâmetro), contendo apendicolito na sua base de implantação, sem evidente densificação dos planos adiposos adjacentes. Os achados podem sugerir apendicite incipiente caso haja correlação clínica/laboratorial.</textarea>

        <input type="checkbox" id="apendicite-sem-perfuracao" onclick="document.getElementById('apendicite-sem-perfuracao-texto').style.display = this.checked ? 'block' : 'none';"> <label for="apendicite-sem-perfuracao">Apendicite - Sem perfuração:</label><br>
        <textarea id="apendicite-sem-perfuracao-texto" style="display: none;">Apêndice cecal distendido, com hiperrealce e espessamento parietal, achados compatíveis com apendicite. Associam-se densificação da gordura adjacente e lâminas líquidas de permeio, sem coleções evidentes, e pequenos linfonodos ileocólicos e mesentéricos, medindo até 1,2 cm. Pequeno segmento do íleo terminal discretamente espessado e distendido, com nível líquido, achado provavelmente reacional.</textarea>

        <input type="checkbox" id="apendicite-perfurada" onclick="document.getElementById('apendicite-perfurada-texto').style.display = this.checked ? 'block' : 'none';"> <label for="apendicite-perfurada">A
Copy


Claude does not have the ability to run the code it generates yet.
KT
continue.

pendicite perfurada</label><br>
<textarea id="apendicite-perfurada-texto" style="display: none;">Apêndice cecal distendido e espessado, com realce parietal. Há comunicação do seu lúmen próximo à base com coleção bloqueada na fossa ilíaca direita (volume estimado em 60 mL), em contato com os músculos laterais da parede abdominal, de paredes espessas, com focos gasosos de permeio e contendo pequena imagem calcificada (provável apendicolito). Outro acúmulo líquido loculado na goteira parietocólica direita (volume estimado em 8 mL). Não se observa pneumoperitôneo à distância. Os achados acima descritos são compatíveis com apendicite perfurada com coleções bloqueadas adjacentes.</textarea>


Copy code
        <input type="checkbox" id="apendicite-perfurada-colecao-suboclusao-valvula-ileocecal" onclick="document.getElementById('apendicite-perfurada-colecao-suboclusao-valvula-ileocecal-texto').style.display = this.checked ? 'block' : 'none';"> <label for="apendicite-perfurada-colecao-suboclusao-valvula-ileocecal">Apendicite perfurada + Coleção + Suboclusão da válvula ileocecal</label><br>
        <textarea id="apendicite-perfurada-colecao-suboclusao-valvula-ileocecal-texto" style="display: none;">Apêndice cecal de dimensões aumentadas (até 1,2 cm de calibre), com hiperrealce mucoso e obliteração de seus contornos. Associa-se acentuada densificação dos planos adiposos pericecais, notando-se pequena coleção periapendicular com focos gasosos de permeio (volume menor que 15 ml). Há ainda espessamento parietal da válvula ileocecal e do íleo terminal (provavelmente reacional), com moderada distensão de alças delgadas a montante e formação de nível hidroaéreo. O conjunto dos achados é sugestivo de apendicite perfurada, com pequena coleção na fossa ilíaca bloqueada pelas alças adjacentes, com espessamento parietal provavelmente reacional da válvula ileocecal e do íleo terminal, determinando quadro de suboclusão intestinal a montante.</textarea>

        <input type="checkbox" id="mucocele-apendice" onclick="document.getElementById('mucocele-apendice-texto').style.display = this.checked ? 'block' : 'none';"> <label for="mucocele-apendice">Mucocele de apêndice</label><br>
        <textarea id="mucocele-apendice-texto" style="display: none;">Apêndice cecal de dimensões aumentadas, com conteúdo líquido no interior e calcificação parietal grosseira predominantemente na base; acompanha densificação da gordura mesentérica adjacente e mede aproximadamente 1,8 cm de largura e 7,2 cm de extensão, configurando uma mucocele de causa a ser determinada, lembrando que mucoceles podem ser decorrentes de lesões neoplásicas do apêndice.</textarea>

        <textarea id="apendice-outros" placeholder="Outros achados do apêndice"></textarea>
    </p>
</div>

<div class="laudo-container">
    <h2>Neoplasia periampular - Papila duodenal:</h2>
    <p>
        <textarea id="neoplasia-periampular-papila-duodenal" placeholder="Descrição da neoplasia periampular da papila duodenal"></textarea>
    </p>
</div>

<div class="laudo-container">
    <h2>GIST Jejunal:</h2>
    <p>
        <textarea id="gist-jejunal" placeholder="Descrição do GIST jejunal"></textarea>
    </p>
</div>

<div class="laudo-container">
    <h2>Lesão hipervascularizada jejunal (GIST/Neuroendócrino):</h2>
    <p>
        <textarea id="lesao-hipervascularizada-jejunal" placeholder="Descrição da lesão hipervascularizada jejunal"></textarea>
    </p>
</div>

<div class="laudo-container">
    <h2>Intestino Grosso:</h2>
    <p>
        <input type="checkbox" id="colite" onclick="document.getElementById('colite-texto').style.display = this.checked ? 'block' : 'none';"> <label for="colite">Colite</label><br>
        <textarea id="colite-texto" style="display: none;">Espessamento parietal e realce mucoso difuso de longo segmento contínuo do cólon, iniciando-se no ângulo esplênico do cólon transverso e progredindo até o sigmóide, acompanhados por densificação da gordura pericólica e ingurgitamento vascular local, achados compatíveis com colite (inespecífica).</textarea>

        <input type="checkbox" id="pancolite" onclick="document.getElementById('pancolite-texto').style.display = this.checked ? 'block' : 'none';"> <label for="pancolite">Pancolite</label><br>
        <textarea id="pancolite-texto" style="display: none;">Leve aumento do conteúdo líquido em alças delgadas. Cólons apresentando espessamento parietal difuso com aumento do realce mucoso e densificação adiposa adjacente, aspecto compatível com pancolite. Apêndice cecal de aspecto preservado.</textarea>

        <input type="checkbox" id="diverticulite-pseudotumoral" onclick="document.getElementById('diverticulite-pseudotumoral-texto').style.display = this.checked ? 'block' : 'none';"> <label for="diverticulite-pseudotumoral">Diverticulite pseudotumoral</label><br>
        <textarea id="diverticulite-pseudotumoral-texto" style="display: none;">Espessamento parietal do cólon ascendente com densificação dos planos adiposos adjacentes e abscesso que se estende até a parede abdominal do flanco direito direita, por meio de pequeno trajeto fistuloso. Tais alterações podem ser decorrentes de lesão neoplásica ou de diverticulite em forma pseudotumoral.</textarea>

        <input type="checkbox" id="coprostase-fecaloma" onclick="document.getElementById('coprostase-fecaloma-texto').style.display = this.checked ? 'block' : 'none';"> <label for="coprostase-fecaloma">Coprostase fecaloma</label><br>
        <textarea id="coprostase-fecaloma-texto" style="display: none;">Reto distendido, com coprostase e densificação dos planos gordurosos adjacentes na sua porção distal.</textarea>

        <input type="checkbox" id="polipo-colon" onclick="document.getElementById('polipo-colon-texto').style.display = this.checked ? 'block' : 'none';"> <label for="polipo-colon">Pólipo cólon</label><br>
        <textarea id="polipo-colon-texto" style="display: none;">Realce mais acentuado de área focal no cólon transverso medindo 1,6cm, podendo corresponder a pequena lesão parietal polipoide.</textarea>

        <input type="checkbox" id="enterocolite" onclick="document.getElementById('enterocolite-texto').style.display = this.checked ? 'block' : 'none';"> <label for="enterocolite">Enterocolite</label><br>
        <textarea id="enterocolite-texto" style="display: none;">Espessamento difuso com edema da submucosa e aumento do realce mucoso em alças delgadas e cólicas, contendo líquido intraluminal, compatível com enterocolite.</textarea>
            
        <input type="checkbox" id="apendangite-epiploica" onclick="document.getElementById('apendangite-epiploica-texto').style.display = this.checked ? 'block' : 'none';"> <label for="apendangite-epiploica">Apendangite epiploica</label><br>
        <textarea id="apendangite-epiploica-texto" style="display: none;">Pequena formação nodular com atenuação de gordura na fossa ilíaca esquerda ( borda antimesentérica do cólon descendente) medindo 1,7 x 0,6 cm, associada a densificação gordurosa dos planos adjacentes, sugestiva de apendagite epiplóica.</textarea>  

        <input type="checkbox" id="diverticulite" onclick="document.getElementById('diverticulite-texto').style.display = this.checked ? 'block' : 'none';"> <label for="diverticulite">Diverticulite</label><br>
        <textarea id="diverticulite-texto" style="display: none;">Divertículos cólicos esparsos no cólon sigmoide, destacando-se área de espessamento segmentar, associada a edema e densificação dos planos adiposos adjacentes, bem como pequena quantidade de líquido livre, sugerindo processo inflamatório local, que pode corresponder a diverticulite. Não são identificados focos de pneumoperitônio ou coleções.</textarea>

        <input type="checkbox" id="diverticulite-fistula-sigmoido-retal" onclick="document.getElementById('diverticulite-fistula-sigmoido-retal-texto').style.display = this.checked ? 'block' : 'none';"> <label for="diverticulite-fistula-sigmoido-retal">Diverticulite complicada com fístula sigmoido-retal</label><br>
        <textarea id="diverticulite-fistula-sigmoido-retal-texto" style="display: none;">Espessamento parietal difuso e hiper-realce mucoso segmentar da transição retossigmoidea, que apresenta múltiplos divertículos, alguns de paredes espessadas, associado a densificação dos planos adiposos adjacentes e proeminência dos linfonodos regionais, de aspecto reacional. Há trajeto fistuloso comunicando a borda antimesentérica do cólon sigmoide com a parede anterior do reto a cerca de 13,0 cm da borda anal, com diâmetro aproximado em 1,0 cm (fístula sigmoido-retal), com material linear hiperdenso no seu interior.</textarea>

        <input type="checkbox" id="diverticulite-fistula-colocolica" onclick="document.getElementById('diverticulite-fistula-colocolica-texto').style.display = this.checked ? 'block' : 'none';"> <label for="diverticulite-fistula-colocolica">Diverticulite com fístula colocólica</label><br>
        <textarea id="diverticulite-fistula-colocolica-texto" style="display: none;">Espessamento parietal circunferencial e irregular com hiper-realce mucoso de segmento distal do cólon descendente e parte do retossigmoide, com extensão aproximada de 9,0 cm, associado a densificação dos planos adiposos adjacentes e espessamento das paredes de alguns divertículos nesse local, achados que podem representar processo inflamatório / infeccioso (provavelmente relacionado à diverculite). Associam-se pequenos linfonodos regionais proeminentes. Aparente curto trajeto fistuloso colocólico nesse local (cerca de 4,0 cm de extensão), com realce de suas paredes, sem distensão líquida. Não há sinais de perfuração de alça ou coleções associadas.</textarea>

        <input type="checkbox" id="pileflebite" onclick="document.getElementById('pileflebite-texto').style.display = this.checked ? 'block' : 'none';"> <label for="pileflebite">Pileflebite</label><br>
        <textarea id="pileflebite-texto" style="display: none;">Divertículo irregular na transição do cólon descendente / sigmoide, associado a discreta densificação dos planos mesentéricos adjacentes, podendo representar processo inflamatório / infeccioso. Nota-se pequena quantidade de gás adjacente ao divertículo supracitado, com trajeto ao longo da topografia da veia mesentérica inferior.</textarea>

        <input type="checkbox" id="retocolite-ulcerativa-atividade" onclick="document.getElementById('retocolite-ulcerativa-atividade-texto').style.display = this.checked ? 'block' : 'none';"> <label for="retocolite-ulcerativa-atividade">Retocolite ulcerativa com atividade de doença</label><br>
        <textarea id="retocolite-ulcerativa-atividade-texto" style="display: none;">Reto, cólon sigmoide e cólon descendente com discreto espessamento parietal e com perda do padrão habitual de haustrações. A camada submucosa/ muscular no reto e sigmoide está hipoatenuante, possivelmente representando gordura, que sugere cronicidade do acometimento. Há discreto realce mucoso na porção distal do cólon transverso e ângulo esplênico e parte do sigmoide e retos superior e medio, que podem estar relacionados a atividade discreta da doença.</textarea>

        <input type="checkbox" id="fistulas" onclick="document.getElementById('fistulas-texto').style.display = this.checked ? 'block' : 'none';"> <label for="fistulas">Fístulas</label><br>
        <textarea id="fistulas-texto" style="display: none;">Estenose da anastomose colorretal, com tecido com densidade de partes moles na região pré-sacral envolvendo todo o reto até o nível da anastomose. Há três fístulas complexas com conteúdo fluido-gasoso que se originam na anastomose, confluentes entre si imediatamente após a sua origem. A primeira, que se origina às 08:00 horas, envolve a vesícula seminal e os espaços periprostáticos à direita, estendendo-se até os músculos puborretal e levantador do ânus deste lado. As outras duas se originam à 01:00 hora e às 05:00 horas, envolvendo o ápice da próstata, a vesícula seminal esquerda, os espaços periprostáticos à esquerda bem como os músculos puborretal, levantador do ânus, obturador interno e isquiocavernoso deste lado.</textarea>  

        <input type="checkbox" id="fistula-reto-doenca-inflamatoria" onclick="document.getElementById('fistula-reto-doenca-inflamatoria-texto').style.display = this.checked ? 'block' : 'none';"> <label for="fistula-reto-doenca-inflamatoria">Fístula reto (Doença inflamatória intestinal)</label><br>
        <textarea id="fistula-reto-doenca-inflamatoria-texto" style="display: none;">Focos de gás extraperitoneais associado a densificação da gordura adjacente na topografia do reto médio podendo corresponder a fístula com coleção.</textarea>

        <input type="checkbox" id
Copy


Claude does not have the ability to run the code it generates yet.
KT
continue

="neoplasia-reto-canal-anal-metastase-hernia" onclick="document.getElementById('neoplasia-reto-canal-anal-metastase-hernia-texto').style.display = this.checked ? 'block' : 'none';"> <label for="neoplasia-reto-canal-anal-metastase-hernia">Neoplasia avançada de reto e canal anal, com perfuração, metástase linfonodal e hernia paracolostomica</label><br>
<textarea id="neoplasia-reto-canal-anal-metastase-hernia-texto" style="display: none;">Volumosa lesão sólida ulcerada acometendo o reto e, principalmente, o canal anal, medindo aproximadamente 12,2 cm no maior eixo, com grande componente exofítico que se estende à fossa isquiorretal / isquioanal e ao períneo à esquerda, com sinais de infiltração do ventre do músculo obturador interno e o ramo isquiopúbico deste lado, compatível com acometimento primário. Tal lesão mantém ainda amplo contato sem plano de clivagem com a uretra (deslocada para a direita) e com o terço inferior da vagina. Associam-se distensão líquida do terço médio / proximal da vagina e sinais de edema do grande lábio esquerdo.</textarea>


Copy code
        <input type="checkbox" id="neoplasia-colon-infiltracao-transmural" onclick="document.getElementById('neoplasia-colon-infiltracao-transmural-texto').style.display = this.checked ? 'block' : 'none';"> <label for="neoplasia-colon-infiltracao-transmural">Neoplasia avançada do cólon, com infiltração transmural e perfuração com coleção bloqueada</label><br>
        <textarea id="neoplasia-colon-infiltracao-transmural-texto" style="display: none;">Espessamento parietal irregular circunferencial e estenosante no terço médio do cólon transverso, por uma extensão de cerca de 9 cm, suspeito para acometimento neoplásico primário. Destacam-se sinais de extensão transmural e perfuração bloqueada, com pequena coleção junto à face mesentérica do cólon, com volume estimado em cerca de 10 ml. Não há pneumoperitônio livre. Extensão direta da lesão ao grande omento, que apresenta densificação difusa. Linfonodos proeminentes no mesocólon transverso, medindo até 1,3 x 1,0 cm, suspeitos para acometimento neoplásico secundário.</textarea>

        <input type="checkbox" id="tumor-sigmoide-descendente-valvula-ileocecal-competente" onclick="document.getElementById('tumor-sigmoide-descendente-valvula-ileocecal-competente-texto').style.display = this.checked ? 'block' : 'none';"> <label for="tumor-sigmoide-descendente-valvula-ileocecal-competente">Tumor de Sigmoide / cólon descendente estenosante com válvula ileocecal competente:</label><br>
        <textarea id="tumor-sigmoide-descendente-valvula-ileocecal-competente-texto" style="display: none;">Lesão expansiva sólida, intraluminal, circunferencial e estenosante no terço proximal do sigmoide, com extensão de cerca de 8,0 cm. Há discreta densificação da gordura cranial à lesão, não sendo possível descartar extensão extramural da mesma por este estudo. Notam-se alguns linfonodos regionais, medindo até 1,4 x 1,0 cm. Há outra lesão de características semelhantes e menores dimensões ou polipo séssil de base larga, na transição sigmoide-descendente, com extensão de cerca de 4,0 cm, também suspeita para neoplasia.</textarea>

        <input type="checkbox" id="tumor-retossigmoide-subestenosante" onclick="document.getElementById('tumor-retossigmoide-subestenosante-texto').style.display = this.checked ? 'block' : 'none';"> <label for="tumor-retossigmoide-subestenosante">Tumor no retossigmoide - subestenosante</label><br>
        <textarea id="tumor-retossigmoide-subestenosante-texto" style="display: none;">Espessamento parietal concêntrico e subestenosante no terço proximal do sigmoide, com extensão de cerca de 6,0 cm, compatível com acometimento neoplásico primário. Associa-se formação nodular liquefeita cranialmente à lesão, medindo 1,7 x 1,7 cm, que pode corresponder a linfonodo acometido. Não há distensão significativa das alças a montante.</textarea>

        <input type="checkbox" id="tumor-sincronico" onclick="document.getElementById('tumor-sincronico-texto').style.display = this.checked ? 'block' : 'none';"> <label for="tumor-sincronico">Tumor sincrônico</label><br>
        <textarea id="tumor-sincronico-texto" style="display: none;">Espessamento parietal de aspecto infiltrativo acometendo o cólon sigmóide de forma circunferencial, estendendo-se por cerca de 8,0 cm, compatível com lesão neoplásica primária. Determina distensão fecal de todo o cólon e pequena dilatação do jejuno e íleo, sugerindo válvula ileocecal incompetente. Há sinais de extensão transmural, com invasão da gordura mesocólica, de invasão vascular extramural e invasão direta da artéria e veias mesentéricas inferiores.</textarea>

        <input type="checkbox" id="sigmoidectomia-sepultamento-coto-retal" onclick="document.getElementById('sigmoidectomia-sepultamento-coto-retal-texto').style.display = this.checked ? 'block' : 'none';"> <label for="sigmoidectomia-sepultamento-coto-retal">Sigmoidectomia com seputamento de coto retal - Colostomia</label><br>
        <textarea id="sigmoidectomia-sepultamento-coto-retal-texto" style="display: none;">Sinais de sigmoidectomia com sepultamento do coto retal. Colostomia na fossa ilíaca esquerda, com hérnia paracolostômica.</textarea>

        <textarea id="intestino-grosso-outros" placeholder="Outros achados do intestino grosso"></textarea>
    </p>
</div>

<div class="laudo-container">
    <h2>Mesentério e Hérnias e obstrução:</h2>
    <p>
        <input type="checkbox" id="omental-cake" onclick="document.getElementById('omental-cake-texto').style.display = this.checked ? 'block' : 'none';"> <label for="omental-cake">Omental cake</label><br>
        <textarea id="omental-cake-texto" style="display: none;">Espessamento irregular do grande omento no seu aspecto superior, em contato com o cólon transverso, provável "omental cake".</textarea>

        <input type="checkbox" id="carcinomatose-peritoneal" onclick="document.getElementById('carcinomatose-peritoneal-texto').style.display = this.checked ? 'block' : 'none';"> <label for="carcinomatose-peritoneal">Carcinomatose peritoneal</label><br>
        <textarea id="carcinomatose-peritoneal-texto" style="display: none;">Diminutos nódulos peritoneais menores que 1,0 cm junto à parede abdominal anterior no hipocôndrio esquerdo e mesogástrio e na fossa ilíaca direita, que podem representar implantes peritoneais neste contexto.</textarea>

        <input type="checkbox" id="peritonite-encapsulante" onclick="document.getElementById('peritonite-encapsulante-texto').style.display = this.checked ? 'block' : 'none';"> <label for="peritonite-encapsulante">Peritonite encapsulante</label><br>
        <textarea id="peritonite-encapsulante-texto" style="display: none;">Espessamento peritoneal difuso notando-se alças intestinais envoltas e por vezes aderidas à superfície peritoneal, caracterizado um componente de peritonite encapsulante.</textarea>

        <input type="checkbox" id="pseudomixoma-peritoneal-mucocele" onclick="document.getElementById('pseudomixoma-peritoneal-mucocele-texto').style.display = this.checked ? 'block' : 'none';"> <label for="pseudomixoma-peritoneal-mucocele">Pseudomixoma peritoneal - mucocele de apêndice</label><br>
        <textarea id="pseudomixoma-peritoneal-mucocele-texto" style="display: none;">Material com atenuação sugestiva de líquido espesso (15-25 U.H.) preenche a cavidade peritoneal e seus recessos, de aspecto multiloculado. Tem efeito de massa sobre os órgãos parenquimatosos, determinando aspecto bocelado dos seus contornos, notadamente no fígado, bem como no tronco portal. Promove ainda compressão e deslocamento anterior da bexiga. Associa-se espessamento difuso do grande omento e determina o deslocamento das alças entéricas predominantemente para a região central do abdome.</textarea>

        <input type="checkbox" id="leiomiossarcoma" onclick="document.getElementById('leiomiossarcoma-texto').style.display = this.checked ? 'block' : 'none';"> <label for="leiomiossarcoma">Leiomiossarcoma</label><br>
        <textarea id="leiomiossarcoma-texto" style="display: none;">Volumosa lesão sólida heterogênea e hipervascularizada, com matriz mixóide central, pélvica e perineal à direita, situada acima e abaixo do plano do músculo elevador do ânus, com extensão desde o plano do promontório sacral até a região subcutânea glútea / perineal direita. Mede cerca de 26 x 15 x 9 cm (volume estimado de 1800 cm³). Apresenta às seguintes relações anatômicas:</textarea>

        <input type="checkbox" id="obstrucao-alca-fechada" onclick="document.getElementById('obstrucao-alca-fechada-texto').style.display = this.checked ? 'block' : 'none';"> <label for="obstrucao-alca-fechada">Obstrução em alça fechada</label><br>
        <textarea id="obstrucao-alca-fechada-texto" style="display: none;">Obstrução em "alça fechada", com área de estreitamento junto à bifurcação aórtica (possivelmente por brida/aderência ou mesmo hérnia interna), notando-se transições abruptas de calibre ao nível da transição jejunoileal e também no íleo terminal. Alguns segmentos ileais e parte do cólon ascendente apresentam espessamento parietal e redução do realce mucoso, sugerindo algum grau de sofrimento vascular (provavelmente venoso). Há também afilamento focal da veia mesentéria superior junto ao foco de estreitamento, pérvia. Artéria mesentérica superior pérvia.</textarea>

        <input type="checkbox" id="obstrucao-intestinal-carcinomatose-peritoneal" onclick="document.getElementById('obstrucao-intestinal-carcinomatose-peritoneal-texto').style.display = this.checked ? 'block' : 'none';"> <label for="obstrucao-intestinal-carcinomatose-peritoneal">Obstrução intestinal por carcinomatose peritoneal</label><br>
        <textarea id="obstrucao-intestinal-carcinomatose-peritoneal-texto" style="display: none;">Surgiu moderada distensão hidroaérea das alças delgadas, caracterizadas a partir de algumas alças jejunais localizadas na região mesogástrica e se estendendo até alças ileais localizadas no flanco e fossa ilíaca direitos, destacando-se múltiplos pontos de redução de calibre ao longo destes segmentos distendidos, determinados pelas lesões secundárias peritoneais. As alças ileais distais e o íleo terminal apresentam-se hipodistendidas. O aspecto de imagem favorece a possibilidade de quadro suboclusivo intestinal determinado pelo envolvimento das alças delgadas pelo acometimento secundário peritoneal.</textarea>

        <input type="checkbox" id="hernia-interna" onclick="document.getElementById('hernia-interna-texto').style.display = this.checked ? 'block' : 'none';"> <label for="hernia-interna">Hérnia Interna</label><br>
        <textarea id="hernia-interna-texto" style="display: none;">Notam-se alças delgadas com topografia lateral ao cólon direito associada a afilamento focal e "torção" da mesentérica superior no mesogástrio, pérvia, com ectasia a montante e com circulação colateral mesentérica associada. Não há sinais obstrutivos ou de sofrimento de alça. Há discreta densificação região da gordura mesentérica.</textarea>

        <input type="checkbox" id="hernia-interna-angulo-agudo" onclick="document.getElementById('hernia-interna-angulo-agudo-texto').style.display = this.checked ? 'block' : 'none';"> <label for="hernia-interna-angulo-agudo">Hérnia Interna + AAO</label><br>
        <textarea id="hernia-interna-angulo-agudo-texto" style="display: none;">Obstrução em "alça fechada", com área de estreitamento junto à bifurcação aórtica (possivelmente por brida/aderência ou mesmo hérnia interna), notando-se transições abruptas de calibre ao nível da transição jejunoileal e também no íleo terminal. Alguns segmentos ileais e parte do cólon ascendente apresentam espessamento parietal e redução do realce mucoso, sugerindo algum grau de sofrimento vascular (provavelmente venoso). Há também afilamento focal da veia mesentéria superior junto ao foco de estreitamento, pérvia. Artéria mesentérica superior pérvia.</textarea>  

        <input type="checkbox" id="hernia-inguinoescrotal-obstrucao" onclick="document.getElementById('hernia-inguinoescrotal-obstrucao-texto').style.display = this.checked ? 'block' : 'none';"> <label for="hernia-inguinoescrotal-obstrucao">Hérnia inguinoescrotal com obstrução</label><br>
        <textarea id="hernia-inguinoescrotal-obstrucao-texto" style="display: none;">Estômago e duodeno com distensão normal. Distensão difusa e acentuada das alças jejunais, com transição abrupta de calibre em curto segmento jejunal encarcerado no interior de hérnia inguinoescrotal esquerda. Os segmentos delgados a jusante da hérnia apresentam-se colabados. O realce parietal das alças intestinais está preservado, inclusive das alças distendidas. Não há pneumatose intestinal, pneumoperitôneo ou coleções intra-abdominais.</
Copy


Claude does not have the ability to run the code it generates yet.
KT
continue. vamos até o final

="neoplasia-avancada-reto-canal-anal" onclick="document.getElementById('neoplasia-avancada-reto-canal-anal-texto').style.display = this.checked ? 'block' : 'none';"> <label for="neoplasia-avancada-reto-canal-anal">Neoplasia avançada de reto e canal anal, com perfuração, metástase linfonodal e hernia paracolostomica</label><br>
<textarea id="neoplasia-avancada-reto-canal-anal-texto" style="display: none;">Volumosa lesão sólida ulcerada acometendo o reto e, principalmente, o canal anal, medindo aproximadamente 12,2 cm no maior eixo, com grande componente exofítico que se estende à fossa isquiorretal / isquioanal e ao períneo à esquerda, com sinais de infiltração do ventre do músculo obturador interno e o ramo isquiopúbico deste lado, compatível com acometimento primário. Tal lesão mantém ainda amplo contato sem plano de clivagem com a uretra (deslocada para a direita) e com o terço inferior da vagina.</textarea>


Copy code
        <input type="checkbox" id="neoplasia-avancada-colon-transmural-perfuracao-colecao" onclick="document.getElementById('neoplasia-avancada-colon-transmural-perfuracao-colecao-texto').style.display = this.checked ? 'block' : 'none';"> <label for="neoplasia-avancada-colon-transmural-perfuracao-colecao">Neoplasia avançada do cólon, com infiltração transmural e perfuração com coleção bloqueada</label><br>
        <textarea id="neoplasia-avancada-colon-transmural-perfuracao-colecao-texto" style="display: none;">Espessamento parietal irregular circunferencial e estenosante no terço médio do cólon transverso, por uma extensão de cerca de 9 cm, suspeito para acometimento neoplásico primário. Destacam-se sinais de extensão transmural e perfuração bloqueada, com pequena coleção junto à face mesentérica do cólon, com volume estimado em cerca de 10 ml. Não há pneumoperitônio livre.</textarea>

        <input type="checkbox" id="tumor-sigmoide-descendente-valvula-ileocecal-competente" onclick="document.getElementById('tumor-sigmoide-descendente-valvula-ileocecal-competente-texto').style.display = this.checked ? 'block' : 'none';"> <label for="tumor-sigmoide-descendente-valvula-ileocecal-competente">Tumor de Sigmoide / cólon descendente estenosante com válvula ileocecal competente:</label><br>
        <textarea id="tumor-sigmoide-descendente-valvula-ileocecal-competente-texto" style="display: none;">Lesão expansiva sólida, intraluminal, circunferencial e estenosante no terço proximal do sigmoide, com extensão de cerca de 8,0 cm. Há discreta densificação da gordura cranial à lesão, não sendo possível descartar extensão extramural da mesma por este estudo. Notam-se alguns linfonodos regionais, medindo até 1,4 x 1,0 cm.</textarea>

        <input type="checkbox" id="tumor-estenosante-valvula-ileocecal-competente" onclick="document.getElementById('tumor-estenosante-valvula-ileocecal-competente-texto').style.display = this.checked ? 'block' : 'none';"> <label for="tumor-estenosante-valvula-ileocecal-competente">Tumor estenosante + Válvula Ileocecal competente</label><br>
        <textarea id="tumor-estenosante-valvula-ileocecal-competente-texto" style="display: none;">Lesão expansiva sólida, intraluminal, circunferencial e estenosante no terço proximal do sigmoide, com extensão de cerca de 8,0 cm, suspeita para neoplasia primária. Há discreta densificação da gordura cranial à lesão, não sendo possível descartar extensão extramural da mesma por este estudo. Notam-se alguns linfonodos regionais, medindo até 1,4 x 1,0 cm.</textarea>

        <input type="checkbox" id="tumor-retossigmoide-subestenosante" onclick="document.getElementById('tumor-retossigmoide-subestenosante-texto').style.display = this.checked ? 'block' : 'none';"> <label for="tumor-retossigmoide-subestenosante">Tumor no retossigmoide - subestenosante</label><br>
        <textarea id="tumor-retossigmoide-subestenosante-texto" style="display: none;">Espessamento parietal concêntrico e subestenosante no terço proximal do sigmoide, com extensão de cerca de 6,0 cm, compatível com acometimento neoplásico primário. Associa-se formação nodular liquefeita cranialmente à lesão, medindo 1,7 x 1,7 cm, que pode corresponder a linfonodo acometido. Não há distensão significativa das alças a montante.</textarea>

        <input type="checkbox" id="tumor-sincronico" onclick="document.getElementById('tumor-sincronico-texto').style.display = this.checked ? 'block' : 'none';"> <label for="tumor-sincronico">Tumor sincrônico</label><br>
        <textarea id="tumor-sincronico-texto" style="display: none;">Espessamento parietal de aspecto infiltrativo acometendo o cólon sigmóide de forma circunferencial, estendendo-se por cerca de 8,0 cm, compatível com lesão neoplásica primária. Determina distensão fecal de todo o cólon e pequena dilatação do jejuno e íleo, sugerindo válvula ileocecal incompetente. Há sinais de extensão transmural, com invasão da gordura mesocólica, de invasão vascular extramural e invasão direta da artéria e veias mesentéricas inferiores.</textarea>

        <input type="checkbox" id="sigmoidectomia-sepultamento-coto-retal-colostomia" onclick="document.getElementById('sigmoidectomia-sepultamento-coto-retal-colostomia-texto').style.display = this.checked ? 'block' : 'none';"> <label for="sigmoidectomia-sepultamento-coto-retal-colostomia">Sigmoidectomia com sepultamento de coto retal - Colostomia</label><br>
        <textarea id="sigmoidectomia-sepultamento-coto-retal-colostomia-texto" style="display: none;">Sinais de sigmoidectomia com sepultamento do coto retal. Colostomia na fossa ilíaca esquerda, com hérnia paracolostômica.</textarea>

        <textarea id="intestino-grosso-outros" placeholder="Outros achados do intestino grosso"></textarea>
    </p>
</div>

<div class="laudo-container">
    <h2>Mesentério, Hérnias e Obstrução:</h2>
    <p>
        <input type="checkbox" id="omental-cake" onclick="document.getElementById('omental-cake-texto').style.display = this.checked ? 'block' : 'none';"> <label for="omental-cake">Omental cake</label><br>
        <textarea id="omental-cake-texto" style="display: none;">Espessamento irregular do grande omento no seu aspecto superior, em contato com o cólon transverso, provável "omental cake".</textarea>

        <input type="checkbox" id="carcinomatose-peritoneal" onclick="document.getElementById('carcinomatose-peritoneal-texto').style.display = this.checked ? 'block' : 'none';"> <label for="carcinomatose-peritoneal">Carcinomatose peritoneal</label><br>
        <textarea id="carcinomatose-peritoneal-texto" style="display: none;">Diminutos nódulos peritoneais menores que 1,0 cm junto à parede abdominal anterior no hipocôndrio esquerdo e mesogástrio e na fossa ilíaca direita, que podem representar implantes peritoneais neste contexto.</textarea>

        <input type="checkbox" id="peritonite-encapsulante" onclick="document.getElementById('peritonite-encapsulante-texto').style.display = this.checked ? 'block' : 'none';"> <label for="peritonite-encapsulante">Peritonite encapsulante</label><br>  
        <textarea id="peritonite-encapsulante-texto" style="display: none;">Espessamento peritoneal difuso notando-se alças intestinais envoltas e por vezes aderidas à superfície peritoneal, caracterizado um componente de peritonite encapsulante.</textarea>

        <input type="checkbox" id="pseudomixoma-peritoneal-mucocele-apendice" onclick="document.getElementById('pseudomixoma-peritoneal-mucocele-apendice-texto').style.display = this.checked ? 'block' : 'none';"> <label for="pseudomixoma-peritoneal-mucocele-apendice">Pseudomixoma peritoneal - mucocele de apêndice</label><br>
        <textarea id="pseudomixoma-peritoneal-mucocele-apendice-texto" style="display: none;">Material com atenuação sugestiva de líquido espesso (15-25 U.H.) preenche a cavidade peritoneal e seus recessos, de aspecto multiloculado. Tem efeito de massa sobre os órgãos parenquimatosos, determinando aspecto bocelado dos seus contornos, notadamente no fígado, bem como no tronco portal. Promove ainda compressão e deslocamento anterior da bexiga.</textarea>
        
        <input type="checkbox" id="leiomiossarcoma" onclick="document.getElementById('leiomiossarcoma-texto').style.display = this.checked ? 'block' : 'none';"> <label for="leiomiossarcoma">Leiomiossarcoma</label><br>
        <textarea id="leiomiossarcoma-texto" style="display: none;">Volumosa lesão sólida heterogênea e hipervascularizada, com matriz mixóide central, pélvica e perineal à direita, situada acima e abaixo do plano do músculo elevador do ânus, com extensão desde o plano do promontório sacral até a região subcutânea glútea / perineal direita. Mede cerca de 26 x 15 x 9 cm (volume estimado de 1800 cm³). Apresenta às seguintes relações anatômicas: Anteriormente: mantém amplo contato com bexiga e com o útero, ambos se mantendo rechaçados anteriormente, superiormente e lateralmente. Também mantém contato com a vagina e com a uretra;</textarea>

        <input type="checkbox" id="obstrucao-alca-fechada" onclick="document.getElementById('obstrucao-alca-fechada-texto').style.display = this.checked ? 'block' : 'none';"> <label for="obstrucao-alca-fechada">Obstrução em alça fechada</label><br>
        <textarea id="obstrucao-alca-fechada-texto" style="display: none;">Obstrução em "alça fechada", com área de estreitamento junto à bifurcação aórtica (possivelmente por brida/aderência ou mesmo hérnia interna), notando-se transições abruptas de calibre ao nível da transição jejunoileal e também no íleo terminal. Alguns segmentos ileais e parte do cólon ascendente apresentam espessamento parietal e redução do realce mucoso, sugerindo algum grau de sofrimento vascular (provavelmente venoso).</textarea>

        <input type="checkbox" id="obstrucao-intestinal-carcinomatose-peritoneal" onclick="document.getElementById('obstrucao-intestinal-carcinomatose-peritoneal-texto').style.display = this.checked ? 'block' : 'none';"> <label for="obstrucao-intestinal-carcinomatose-peritoneal">Obstrução intestinal por carcinomatose peritoneal</label><br>
        <textarea id="obstrucao-intestinal-carcinomatose-peritoneal-texto" style="display: none;">Surgiu moderada distensão hidroaérea das alças delgadas, caracterizadas a partir de algumas alças jejunais localizadas na região mesogástrica e se estendendo até alças ileais localizadas no flanco e fossa ilíaca direitos, destacando-se múltiplos pontos de redução de calibre ao longo destes segmentos distendidos, determinados pelas lesões secundárias peritoneais.</textarea>

        <input type="checkbox" id="hernia-interna" onclick="document.getElementById('hernia-interna-texto').style.display = this.checked ? 'block' : 'none';"> <label for="hernia-interna">Hérnia Interna</label><br>
        <textarea id="hernia-interna-texto" style="display: none;">Notam-se alças delgadas com topografia lateral ao cólon direito associada a afilamento focal e "torção" da mesentérica superior no mesogástrio, pérvia, com ectasia a montante e com circulação colateral mesentérica associada. Não há sinais obstrutivos ou de sofrimento de alça. Há discreta densificação região da gordura mesentérica.</textarea>

        <input type="checkbox" id="hernia-interna-aao" onclick="document.getElementById('hernia-interna-aao-texto').style.display = this.checked ? 'block' : 'none';"> <label for="hernia-interna-aao">Hérnia Interna + AAO</label><br>
        <textarea id="hernia-interna-aao-texto" style="display: none;">Obstrução em "alça fechada", com área de estreitamento junto à bifurcação aórtica (possivelmente por brida/aderência ou mesmo hérnia interna), notando-se transições abruptas de calibre ao nível da transição jejunoileal e também no íleo terminal. Alguns segmentos ileais e parte do cólon ascendente apresentam espessamento parietal e redução do realce mucoso, sugerindo algum grau de sofrimento vascular (provavelmente venoso).</textarea>

        <input type="checkbox" id="hernia-inguinoescrotal-obstrucao" onclick="document.getElementById('hernia-inguinoescrotal-obstrucao-texto').style.display = this.checked ? 'block' : 'none';"> <label for="hernia-inguinoescrotal-obstrucao">Hérnia inguinoescrotal com obstrução</label><br>
        <textarea id="hernia-inguinoescrotal-obstrucao-texto" style="display: none;">Estômago e duodeno com distensão normal. Distensão difusa e acentuada das alças jejunais, com transição abrupta de calibre em curto segmento jejunal encarcerado no interior de hérnia inguinoescrotal esquerda. Os segmentos delgados a jusante da hérnia apresentam-se colabados. O realce parietal das alças intestinais está preservado


## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/gracious-wiles.git
cd gracious-wiles
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Tech stack

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Chakra UI](https://chakra-ui.com/)

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
