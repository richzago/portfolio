import type { Project } from "../app/types/project";

export const projects: Project[] = [
  // ========================================
  // PROJETOS PRINCIPAIS
  // ========================================

  {
    id: "api-crud-users",
    title: "CRUD de Usuários",
    description:
      "API REST para gerenciamento de usuários, com operações CRUD, autenticação, persistência em PostgreSQL utilizando TypeORM e testes automatizados.",
    image: "/images/projects/api.png",
    technologies: [
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "TypeORM",
      "Docker",
      "Testes automatizados",
    ],
    category: "Back-end",
    featured: true,
    githubUrl: "https://github.com/richzago/api-crud-users",
    year: 2023,
  },

  {
    id: "api-kimoveis",
    title: "KImóveis API",
    description:
      "API REST para gerenciamento imobiliário, com autenticação JWT, CRUD de usuários, imóveis, categorias e agendamentos, testes automatizados e integração contínua.",
    image: "/images/projects/api.png",
    technologies: [
      "Node.js",
      "TypeScript",
      "Express",
      "PostgreSQL",
      "TypeORM",
      "JWT",
      "Jest",
      "Docker",
      "GitHub Actions",
    ],
    category: "Back-end",
    featured: true,
    githubUrl: "https://github.com/richzago/api-kimoveis",
    year: 2023,
  },

  {
    id: "bandkamp",
    title: "BandKamp",
    description:
      "Aplicação para gerenciamento de álbuns e músicas, com autenticação e diferentes níveis de permissão para usuários comuns e administradores.",
    image: "/images/projects/api.png",
    technologies: ["Python", "Django", "PostgreSQL"],
    category: "Back-end",
    featured: true,
    githubUrl: "https://github.com/richzago/bandkamp",
    year: 2022,
  },

  {
    id: "kenzie-buster",
    title: "Kenzie Buster",
    description:
      "Sistema de gerenciamento de usuários, filmes e compras, com autenticação, controle de permissões e gerenciamento de histórico de compras.",
    image: "/images/projects/api.png",
    technologies: ["Python", "Django"],
    category: "Back-end",
    featured: true,
    githubUrl: "https://github.com/richzago/kenzie-buster",
    year: 2022,
  },

  {
    id: "transaction-hub",
    title: "Transaction Hub",
    description:
      "API de gerenciamento de usuários e transações financeiras desenvolvida com Java e Spring Boot, utilizando PostgreSQL e regras de negócio para transferências.",
    image: "/images/projects/api.png",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "Maven"],
    category: "Back-end",
    featured: true,
    githubUrl: "https://github.com/richzago/transaction-hub",
    year: 2023,
  },

  {
    id: "zago-bank",
    title: "Zago Bank",
    description:
      "Sistema web de transações financeiras desenvolvido em Laravel, com API para gerenciamento de usuários, depósitos e transferências entre contas.",
    image: "/images/projects/api.png",
    technologies: ["PHP", "Laravel", "MySQL", "Docker", "Composer"],
    category: "Back-end",
    featured: true,
    githubUrl: "https://github.com/richzago/zago-bank",
    year: 2023,
  },

  // ========================================
  // OUTROS PROJETOS
  // ========================================

  {
    id: "movies-auth",
    title: "Movies Auth API",
    description:
      "API REST de catálogo de filmes desenvolvida como desafio técnico, com autenticação JWT, operações CRUD, Redis e documentação interativa utilizando Swagger.",
    image: "/images/projects/api.png",
    technologies: [
      "Node.js",
      "TypeScript",
      "NestJS",
      "TypeORM",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Swagger",
    ],
    category: "Back-end",
    githubUrl: "https://github.com/richzago/movies-auth",
    year: 2023,
  },

  {
    id: "pokemon-fidelizoume",
    title: "Pokémon Dashboard",
    description:
      "Aplicação React para consulta e visualização de informações sobre Pokémon, com pesquisa, gráficos, detalhes individuais e testes automatizados.",
    image: "/images/projects/pokemon-fidelizoume.png",
    technologies: ["React", "JavaScript", "Docker"],
    category: "Front-end",
    githubUrl: "https://github.com/richzago/pokemon-fidelizoume",
    year: 2023,
  },

  {
    id: "hamburguer-site",
    title: "Hamburgueria",
    description:
      "Aplicação responsiva de hamburgueria com integração de API (que não está mais disponível), catálogo de produtos, carrinho de compras, cálculo de valores e persistência local.",
    image: "/images/projects/hamburguer-site.png",
    technologies: ["React", "JavaScript", "Styled Components", "localStorage"],
    category: "Front-end",
    githubUrl: "https://github.com/richzago/hamburguer-site",
    year: 2022,
  },

  {
    id: "converter-cnab",
    title: "Conversor CNAB",
    description:
      "Aplicação web para importação e processamento de arquivos CNAB, realizando interpretação, normalização e armazenamento de transações financeiras em banco de dados.",
    image: "/images/projects/converter-cnab.png",
    technologies: ["Python", "Django"],
    category: "Full Stack",
    githubUrl: "https://github.com/richzago/converter-cnab",
    year: 2023,
  },

  {
    id: "clients-pdf-fullstack",
    title: "Gerenciamento de Clientes",
    description:
      "Sistema Full Stack de cadastro de clientes e contatos, com operações CRUD, autenticação e geração de relatórios em tela e PDF.",
    image: "/images/projects/clients-pdf-fullstack.png",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "TypeORM",
    ],
    category: "Full Stack",
    githubUrl: "https://github.com/richzago/clients-pdf-fullstack",
    year: 2023,
  },

  {
    id: "api-crud-users-adm",
    title: "CRUD de Usuários e Administradores",
    description:
      "API REST para gerenciamento de usuários com controle de permissões administrativas, armazenamento em memória, testes automatizados e integração contínua.",
    image: "/images/projects/api.png",
    technologies: [
      "Node.js",
      "JavaScript",
      "Express",
      "GitHub Actions",
      "Testes automatizados",
    ],
    category: "Back-end",
    githubUrl: "https://github.com/richzago/api-crud-users-adm",
    year: 2023,
  },

  {
    id: "crud-form-php",
    title: "CRUD de Formulários PHP",
    description:
      "Aplicação web para cadastro, consulta, edição e exclusão de formulários, utilizando PHP e MySQL para persistência dos dados.",
    image: "/images/projects/crud-form-php.png",
    technologies: ["PHP", "MySQL", "Composer"],
    category: "Full Stack",
    githubUrl: "https://github.com/richzago/crud-form-php",
    year: 2023,
  },

  // ========================================
  // PORTFÓLIO PESSOAL
  // ========================================

  {
    id: "portfolio",
    title: "Portfólio Pessoal",
    description:
      "Portfólio pessoal desenvolvido com Next.js e TypeScript para apresentar minha trajetória, competências e projetos, com foco em responsividade, organização e experiência do usuário.",
    image: "/images/projects/portfolio.png",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    category: "Front-end",
    year: 2026,
  },
];
