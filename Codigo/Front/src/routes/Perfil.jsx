// hooks e services
import { useEffect, useState, useCallback } from "react";
import { useLogin } from "../hooks/auth";
import {
  getRotina,
  editRotina,
  criarHabito,
  deleteHabito,
} from "../services/rotinaService";
import { getPost } from "../services/postService";
import { parseFreq } from "../helpers";
// components
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Post from "../components/Post";
// chakra e formik
import {
  Avatar,
  Box,
  Button,
  Container,
  Text,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  SimpleGrid,
  Grid,
  GridItem,
  Flex,
  Input,
  FormControl,
  Textarea,
  FormLabel,
  Modal,
  ModalBody,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalFooter,
  Stack,
  Link,
} from "@chakra-ui/react";
import { useToast, useDisclosure } from "@chakra-ui/react";
import { Field, Form, Formik, useFormik } from "formik";

// input para edição de hábitos
const RotinasEditRend = (props) => {
  const { id, nome, descr, freq, hora, user_id, setIsEditingHabito } = props;
  const toast = useToast();

  return (
    <Formik
      initialValues={{
        habNome: nome,
        descr: descr,
        freq: freq,
        date: hora,
        user_id: user_id,
      }}
      onSubmit={async (values) => {
        const response = await editRotina(
          id,
          values.habNome,
          values.descr,
          values.freq,
          values.date,
          values.user_id
        );

        if (response) {
          setIsEditingHabito(false);
          toast({
            title: "Perfeito!",
            description: "Hábito editado com sucesso.",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
        }
      }}
    >
      <Form>
        <Box
          bg={"#EBF5F8"}
          px={4}
          py={5}
          rounded={"lg"}
          shadow={"lg"}
          margin={"10px"}
        >
          <Flex>
            <Container>
              <FormControl my={"10px"} isRequired>
                <Field
                  as={Input}
                  id="habNome"
                  name="habNome"
                  placeholder="Seu hábito..."
                  focusBorderColor="#B6DFD8"
                />
              </FormControl>

              <FormControl my={"10px"} isRequired>
                <Field
                  as={Textarea}
                  id="descr"
                  name="descr"
                  placeholder="Descrição..."
                  focusBorderColor="#B6DFD8"
                />
              </FormControl>

              <FormControl m={"10px"} isRequired>
                <Field
                  as={Input}
                  id="freq"
                  name="freq"
                  placeholder="Frequência..."
                  focusBorderColor="#B6DFD8"
                />
              </FormControl>

              <FormControl m={"10px"} isRequired>
                <Field
                  as={Input}
                  type="time"
                  id="date"
                  name="date"
                  focusBorderColor="#B6DFD8"
                />
              </FormControl>
            </Container>
          </Flex>

          <Button variant={"btn2"} type={"submit"}>
            Pronto!
          </Button>

          <Button
            variant={"ghost"}
            type={"button"}
            onClick={() => {
              setIsEditingHabito(false);
            }}
          >
            Cancelar
          </Button>

          <DeletarHab id={id} setIsEditingHabito={setIsEditingHabito} />
        </Box>
      </Form>
    </Formik>
  );
};

// deletar hábito
const DeletarHab = (id, setIsEditingHabito) => {
  const toast = useToast();

  const handleDelete = async () => {
    const response = await deleteHabito(id);

    if (response) {
      toast({
        title: "Perfeito!",
        description: "Hábito deletado com sucesso.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }

    window.location.reload();
  };

  return (
    <Button
      variant={"btn1"}
      type={"button"}
      onClick={() => {
        handleDelete();
        setIsEditingHabito(false);
      }}
    >
      Deletar
    </Button>
  );
};

// rotinas renderizadas
const RotinasRend = (props) => {
  const { id, nome, descr, freq, hora, user_id } = props;
  const [isEditingHabito, setIsEditingHabito] = useState(false);

  return (
    <>
      {!isEditingHabito ? (
        <Box
          bg={"#EBF5F8"}
          px={4}
          py={5}
          rounded={"lg"}
          shadow={"lg"}
          margin={"10px"}
        >
          <Flex>
            <Container>
              <Text fontSize={"md"}>{nome}</Text>
              <Text fontSize={"sm"}>{descr}</Text>
              <Text fontSize={"sm"}>{freq}</Text>
              <Text fontSize={"sm"}>{hora}</Text>
            </Container>
          </Flex>

          <Button
            variant={"btn2"}
            type={"button"}
            onClick={() => setIsEditingHabito(true)}
          >
            Editar
          </Button>
        </Box>
      ) : (
        <RotinasEditRend
          key={id}
          id={id}
          nome={nome}
          descr={descr}
          freq={freq}
          hora={hora}
          user_id={user_id}
          setIsEditingHabito={setIsEditingHabito}
        />
      )}
    </>
  );
};

// modal para criação de novo hábito
const CriarHab = (id) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  return (
    <>
      <Button
        variant={"btn1"}
        marginY={"15px"}
        ml={"10px"}
        className="btn-add-hab"
        onClick={() => {
          onOpen();
        }}
      >
        Criar novo hábito!
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={() => {
          onClose();
        }}
        backdropFilter={"blur(10px)"}
        isCentered
      >
        <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
        <ModalContent>
          <ModalHeader justifySelf={"center"} fontSize={"xl"}>
            Criar novo hábito!
          </ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <Box>
              <Formik
                initialValues={{
                  habNome: "",
                  descr: "",
                  freq: "",
                  date: "",
                  user_id: id,
                }}
                onSubmit={async (values) => {
                  const response = await criarHabito(
                    values.habNome,
                    values.descr,
                    values.freq,
                    values.date,
                    values.user_id
                  );

                  if (response) {
                    toast({
                      title: "Perfeito!",
                      description: "Hábito editado com sucesso.",
                      status: "success",
                      duration: 3000,
                      isClosable: true,
                    });

                    onClose();
                    window.location.reload();
                  }
                }}
              >
                <Form>
                  <Box>
                    <Flex>
                      <Container>
                        <FormControl my={"10px"} isRequired>
                          <Field
                            as={Input}
                            id="habNome"
                            name="habNome"
                            placeholder="Seu hábito..."
                            focusBorderColor="#B6DFD8"
                          />
                        </FormControl>

                        <FormControl my={"10px"} isRequired>
                          <Field
                            as={Textarea}
                            id="descr"
                            name="descr"
                            placeholder="Descrição..."
                            focusBorderColor="#B6DFD8"
                          />
                        </FormControl>

                        <FormControl my={"10px"} isRequired>
                          <Field
                            as={Input}
                            id="freq"
                            name="freq"
                            placeholder="Frequência..."
                            focusBorderColor="#B6DFD8"
                          />
                        </FormControl>

                        <FormControl my={"10px"} isRequired>
                          <Field
                            as={Input}
                            type="time"
                            id="date"
                            name="date"
                            focusBorderColor="#B6DFD8"
                          />
                        </FormControl>
                      </Container>
                    </Flex>

                    <Button variant={"btn2"} type={"submit"}>
                      Pronto!
                    </Button>
                  </Box>
                </Form>
              </Formik>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button
              variant="ghost"
              mr={2}
              type="button"
              onClick={() => {
                onClose();
              }}
              size={"sm"}
            >
              <Link>Cancelar</Link>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

const PostsRend = ({ id, habito, user_id, descr, data }) => {
  return (
    <Card>
      <CardHeader>
        <Heading size="md">{habito.nome}</Heading>
      </CardHeader>
      <CardBody>
        <Text>[INSERIR FOTO AQUI]</Text>
        <Text>{descr}</Text>
        <Text>{data}</Text>
      </CardBody>
      <CardFooter>
        <Post
          id={id}
          habito={habito}
          user_id={user_id}
          descr={descr}
          data={data}
        />
      </CardFooter>
    </Card>
  );
};

function Perfil() {
  const { userData } = useLogin();
  const [Rotinas, setRotinas] = useState([]);
  const [Posts, setPosts] = useState([]);

  // renderiza posts depois das rotinas
  const handlePost = useCallback((post) => {
    if (!Rotinas.length) return null;
    const habito = Rotinas.find((rotina) => rotina.id === post.habito_id);
    return (
      <PostsRend
        key={`post-${post.id}`}
        id={post.id}
        habito={habito}
        user_id={post.user_id}
        descr={post.desc}
        data={post.data}
      />
    );
  }, [Rotinas, Posts]);

  // fetch rotinas e salva em um array
  useEffect(() => {
    const fetchRotinas = async () => {
      const dataRotinas = await getRotina(userData.id);
      setRotinas(dataRotinas.data);
    };

    fetchRotinas();
  }, []);

  // fetch posts e salva em um array
  useEffect(() => {
    const fetchPosts = async () => {
      const dataPosts = await getPost(userData.id);
      setPosts(dataPosts.data);
    };

    fetchPosts();
  }, []);

  console.log("rotinas: ", Rotinas);

  return (
    <>
      <Nav />

      <Grid
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(4, 1fr)"
        gap={4}
        margin={"60px"}
      >
        <GridItem className="perfil-info-container" rowSpan={2}>
          <Avatar size={"2xl"} />
          <Text fontSize={"3xl"}>{userData.nome}</Text>
          <Text fontSize={"xl"}>@{userData.nick}</Text>
          <Text fontSize={"md"}>{userData.descr}</Text>
          <Button variant={"btn1"} marginY={"15px"} className="btn-edit-hab">
            Editar Perfil
          </Button>
        </GridItem>

        <GridItem className="perfil-rotinas-container" colSpan={3}>
          <Box bgColor={"lightPink"} padding={"5px"}>
            <Text fontSize={"22px"} marginLeft={"20px"}>
              Minha Rotina
            </Text>

            {Rotinas.map((rotina) => (
              <RotinasRend
                key={`rotina-${rotina.id}`}
                id={rotina.id}
                nome={rotina.nome}
                descr={rotina.descr}
                freq={rotina.freq}
                hora={rotina.hora}
                user_id={userData.id}
              />
            ))}
          </Box>

          <CriarHab id={userData.id} />
        </GridItem>

        <GridItem className="perfil-posts-container" colSpan={3}>
          <Text fontSize={"xl"}>Minhas Postagens</Text>
          <SimpleGrid
            spacing={4}
            templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
            bgColor={"#EBF5F8"}
            p={"20px"}
          >
            {Posts.map((post) => 
              handlePost(post)              
            )}

          </SimpleGrid>
        </GridItem>
      </Grid>

      <Footer />
    </>
  );
}

export default Perfil;
