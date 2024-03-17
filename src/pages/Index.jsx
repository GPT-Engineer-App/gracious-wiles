// Complete the Index page component here
// Use chakra-ui
import { Box, Container, Checkbox, CheckboxGroup, FormControl, FormLabel, Heading, Stack, Textarea, VStack } from "@chakra-ui/react";
import { useState } from "react";

const Index = () => {
  const [checkedItems, setCheckedItems] = useState({});

  const handleCheck = (e) => {
    const { id, checked } = e.target;
    setCheckedItems({ ...checkedItems, [id]: checked });
  };

  return (
    <Container maxW="container.lg">
      <Heading as="h1" textAlign="center" mb={10}>
        Plataforma de Laudos Radiológicos - TC de Abdome
      </Heading>
      <VStack spacing={6}>
        {/* Fígado */}
        <Box p={5} shadow="md" borderWidth="1px">
          <FormControl as="fieldset">
            <FormLabel as="legend" fontSize="xl" mb={4}>
              Fígado:
            </FormLabel>
            <CheckboxGroup colorScheme="green">
              <Stack spacing={2}>
                {/* Generated checkboxes for each finding */}
                {/* Example checkbox */}
                <Checkbox id="figado-normal" onChange={handleCheck}>
                  Normal
                </Checkbox>
                {/* More checkboxes based on the provided list */}
              </Stack>
            </CheckboxGroup>
            <Textarea id="figado-outros" placeholder="Outros achados do fígado" mt={4} isDisabled={!checkedItems["figado-outros"]} />
          </FormControl>
        </Box>

        {/* Vias Biliares */}
        {/* ... Similar structure for each section ... */}

        {/* Conclusão e Impressão Diagnóstica */}
        <Box p={5} shadow="md" borderWidth="1px">
          <FormControl>
            <FormLabel as="legend" fontSize="xl" mb={4}>
              Conclusão e Impressão Diagnóstica:
            </FormLabel>
            <Textarea id="conclusao" placeholder="Conclusão e impressão diagnóstica" />
          </FormControl>
        </Box>

        {/* Comparação com exames anteriores */}
        <Box p={5} shadow="md" borderWidth="1px">
          <FormControl>
            <FormLabel as="legend" fontSize="xl" mb={4}>
              Comparação com exames anteriores:
            </FormLabel>
            <Textarea id="comparacao-exames-anteriores" placeholder="Comparação com exames anteriores" />
          </FormControl>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
