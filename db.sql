
CREATE TABLE public.comptes (
    phone character varying,
    email character varying,
    password character varying,
    nom character varying,
    prenom character varying,
    id integer NOT NULL
);


ALTER TABLE public.comptes OWNER TO postgres;

--
-- TOC entry 211 (class 1259 OID 16498)
-- Name: comptes_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.comptes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.comptes_id_seq OWNER TO postgres;

--
-- TOC entry 3115 (class 0 OID 0)
-- Dependencies: 211
-- Name: comptes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.comptes_id_seq OWNED BY public.comptes.id;


--
-- TOC entry 204 (class 1259 OID 16455)
-- Name: date; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.date (
    heure numeric,
    jour numeric,
    mois numeric,
    "année" numeric,
    id integer NOT NULL
);


ALTER TABLE public.date OWNER TO postgres;

--
-- TOC entry 205 (class 1259 OID 16461)
-- Name: date_action; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.date_action (
    heure numeric,
    jour numeric,
    mois numeric,
    "année" numeric,
    id integer NOT NULL
);


ALTER TABLE public.date_action OWNER TO postgres;

--
-- TOC entry 212 (class 1259 OID 16507)
-- Name: date_action_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.date_action_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.date_action_id_seq OWNER TO postgres;

--
-- TOC entry 3116 (class 0 OID 0)
-- Dependencies: 212
-- Name: date_action_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.date_action_id_seq OWNED BY public.date_action.id;


--
-- TOC entry 213 (class 1259 OID 16516)
-- Name: date_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.date_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.date_id_seq OWNER TO postgres;

--
-- TOC entry 3117 (class 0 OID 0)
-- Dependencies: 213
-- Name: date_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.date_id_seq OWNED BY public.date.id;


--
-- TOC entry 201 (class 1259 OID 16388)
-- Name: employee; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.employee (
    nom character varying,
    id_employee numeric,
    prenom character varying,
    email character varying,
    phone numeric,
    "mot de passe" character varying,
    id integer NOT NULL
);


ALTER TABLE public.employee OWNER TO postgres;

--
-- TOC entry 220 (class 1259 OID 16596)
-- Name: employee_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.employee_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.employee_id_seq OWNER TO postgres;

--
-- TOC entry 3118 (class 0 OID 0)
-- Dependencies: 220
-- Name: employee_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.employee_id_seq OWNED BY public.employee.id;


--
-- TOC entry 208 (class 1259 OID 16480)
-- Name: historique; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.historique (
    type_inventaire character varying,
    lieu_inventaire character varying,
    date_inventaire numeric,
    quantite numeric,
    id integer NOT NULL
);


ALTER TABLE public.historique OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 16585)
-- Name: historique_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.historique_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.historique_id_seq OWNER TO postgres;

--
-- TOC entry 3119 (class 0 OID 0)
-- Dependencies: 219
-- Name: historique_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.historique_id_seq OWNED BY public.historique.id;


--
-- TOC entry 207 (class 1259 OID 16470)
-- Name: inventaire; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.inventaire (
    id_inventaire numeric,
    id integer NOT NULL
);


ALTER TABLE public.inventaire OWNER TO postgres;

--
-- TOC entry 206 (class 1259 OID 16467)
-- Name: inventaire_action; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.inventaire_action (
    lieu character varying,
    magasin character varying,
    id integer NOT NULL
);


ALTER TABLE public.inventaire_action OWNER TO postgres;

--
-- TOC entry 214 (class 1259 OID 16529)
-- Name: inventaire_action_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.inventaire_action_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.inventaire_action_id_seq OWNER TO postgres;

--
-- TOC entry 3120 (class 0 OID 0)
-- Dependencies: 214
-- Name: inventaire_action_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.inventaire_action_id_seq OWNED BY public.inventaire_action.id;


--
-- TOC entry 218 (class 1259 OID 16574)
-- Name: inventaire_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.inventaire_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.inventaire_id_seq OWNER TO postgres;

--
-- TOC entry 3121 (class 0 OID 0)
-- Dependencies: 218
-- Name: inventaire_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.inventaire_id_seq OWNED BY public.inventaire.id;


--
-- TOC entry 210 (class 1259 OID 16489)
-- Name: inventaire_prix; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.inventaire_prix (
    date character varying,
    lieu character varying,
    nom_de_magasin character varying,
    avec_ocr character varying,
    id integer NOT NULL
);


ALTER TABLE public.inventaire_prix OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 16609)
-- Name: inventaire_prix_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.inventaire_prix_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.inventaire_prix_id_seq OWNER TO postgres;

--
-- TOC entry 3122 (class 0 OID 0)
-- Dependencies: 221
-- Name: inventaire_prix_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.inventaire_prix_id_seq OWNED BY public.inventaire_prix.id;


--
-- TOC entry 209 (class 1259 OID 16486)
-- Name: inventaire_produit; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.inventaire_produit (
    date character varying,
    lieu character varying,
    nom_du_magasin character varying,
    ean character varying,
    "libellé_du_produit" character varying,
    quantite character varying,
    id integer NOT NULL
);


ALTER TABLE public.inventaire_produit OWNER TO postgres;

--
-- TOC entry 215 (class 1259 OID 16541)
-- Name: inventaire_produit_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.inventaire_produit_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.inventaire_produit_id_seq OWNER TO postgres;

--
-- TOC entry 3123 (class 0 OID 0)
-- Dependencies: 215
-- Name: inventaire_produit_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.inventaire_produit_id_seq OWNED BY public.inventaire_produit.id;


--
-- TOC entry 203 (class 1259 OID 16449)
-- Name: magasin; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.magasin (
    nom_magasin character varying,
    lieu_magasin character varying,
    id integer NOT NULL
);


ALTER TABLE public.magasin OWNER TO postgres;

--
-- TOC entry 216 (class 1259 OID 16552)
-- Name: magasin_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.magasin_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.magasin_id_seq OWNER TO postgres;

--
-- TOC entry 3124 (class 0 OID 0)
-- Dependencies: 216
-- Name: magasin_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.magasin_id_seq OWNED BY public.magasin.id;


--
-- TOC entry 202 (class 1259 OID 16419)
-- Name: produit; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.produit (
    nom character varying,
    labelle character varying,
    quantite numeric,
    codeean numeric,
    notre_prix numeric,
    id integer NOT NULL
);


ALTER TABLE public.produit OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 16563)
-- Name: produit_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.produit_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.produit_id_seq OWNER TO postgres;

--
-- TOC entry 3125 (class 0 OID 0)
-- Dependencies: 217
-- Name: produit_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.produit_id_seq OWNED BY public.produit.id;


--
-- TOC entry 2924 (class 2604 OID 16500)
-- Name: comptes id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.comptes ALTER COLUMN id SET DEFAULT nextval('public.comptes_id_seq'::regclass);


--
-- TOC entry 2928 (class 2604 OID 16518)
-- Name: date id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.date ALTER COLUMN id SET DEFAULT nextval('public.date_id_seq'::regclass);


--
-- TOC entry 2929 (class 2604 OID 16509)
-- Name: date_action id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.date_action ALTER COLUMN id SET DEFAULT nextval('public.date_action_id_seq'::regclass);


--
-- TOC entry 2925 (class 2604 OID 16598)
-- Name: employee id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.employee ALTER COLUMN id SET DEFAULT nextval('public.employee_id_seq'::regclass);


--
-- TOC entry 2932 (class 2604 OID 16587)
-- Name: historique id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.historique ALTER COLUMN id SET DEFAULT nextval('public.historique_id_seq'::regclass);


--
-- TOC entry 2931 (class 2604 OID 16576)
-- Name: inventaire id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.inventaire ALTER COLUMN id SET DEFAULT nextval('public.inventaire_id_seq'::regclass);


--
-- TOC entry 2930 (class 2604 OID 16531)
-- Name: inventaire_action id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.inventaire_action ALTER COLUMN id SET DEFAULT nextval('public.inventaire_action_id_seq'::regclass);


--
-- TOC entry 2934 (class 2604 OID 16611)
-- Name: inventaire_prix id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.inventaire_prix ALTER COLUMN id SET DEFAULT nextval('public.inventaire_prix_id_seq'::regclass);


--
-- TOC entry 2933 (class 2604 OID 16543)
-- Name: inventaire_produit id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.inventaire_produit ALTER COLUMN id SET DEFAULT nextval('public.inventaire_produit_id_seq'::regclass);


--
-- TOC entry 2927 (class 2604 OID 16554)
-- Name: magasin id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.magasin ALTER COLUMN id SET DEFAULT nextval('public.magasin_id_seq'::regclass);


--
-- TOC entry 2926 (class 2604 OID 16565)
-- Name: produit id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.produit ALTER COLUMN id SET DEFAULT nextval('public.produit_id_seq'::regclass);


--
-- TOC entry 3087 (class 0 OID 16385)
-- Dependencies: 200
-- Data for Name: comptes; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.comptes VALUES ('+21621556', 'aaaaa@gmail.com', 'a123s1', NULL, NULL, 1);
INSERT INTO public.comptes VALUES ('+21621556', 'aaaaa@gmail.com', 'a123s1', NULL, NULL, 2);
INSERT INTO public.comptes VALUES ('+21621556', 'aaaaa@gmail.com', 'a123s1', NULL, NULL, 3);
INSERT INTO public.comptes VALUES ('+21621556', 'aaaaa@gmail.com', 'a123s1', NULL, NULL, 4);
INSERT INTO public.comptes VALUES ('+21621556', 'aaaaa@gmail.com', 'a123s1', NULL, NULL, 5);
INSERT INTO public.comptes VALUES ('+21621556', 'aaaaa@gmail.com', 'a123s1', NULL, NULL, 6);
INSERT INTO public.comptes VALUES ('+21621556', 'aaaaa@gmail.com', 'a123s1', NULL, NULL, 7);
INSERT INTO public.comptes VALUES ('+21621556', 'aaaaa@gmail.com', 'a123s1', NULL, NULL, 8);
INSERT INTO public.comptes VALUES ('+21621556', 'aaaaa@gmail.com', 'a123s1', NULL, NULL, 9);
INSERT INTO public.comptes VALUES ('+21621556', 'aaaaa@gmail.com', 'a123s1', NULL, NULL, 10);
INSERT INTO public.comptes VALUES ('+21621556', 'aaaaa@gmail.com', 'a123s1', NULL, NULL, 11);
INSERT INTO public.comptes VALUES ('+21621556', 'aaaaa@gmail.com', 'a123s1', NULL, NULL, 12);


--
-- TOC entry 3091 (class 0 OID 16455)
-- Dependencies: 204
-- Data for Name: date; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.date VALUES (1343, 31, 3, 2022, 1);
INSERT INTO public.date VALUES (1343, 31, 3, 2022, 2);
INSERT INTO public.date VALUES (1343, 31, 3, 2022, 3);


--
-- TOC entry 3092 (class 0 OID 16461)
-- Dependencies: 205
-- Data for Name: date_action; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.date_action VALUES (1509, 1, 4, 2021, 1);
INSERT INTO public.date_action VALUES (1509, 1, 4, 2021, 2);
INSERT INTO public.date_action VALUES (1509, 1, 4, 2021, 3);


--
-- TOC entry 3088 (class 0 OID 16388)
-- Dependencies: 201
-- Data for Name: employee; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.employee VALUES ('foulen', NULL, NULL, NULL, NULL, NULL, 1);
INSERT INTO public.employee VALUES ('foulen', NULL, NULL, NULL, NULL, NULL, 2);
INSERT INTO public.employee VALUES ('foulen', NULL, NULL, NULL, NULL, NULL, 3);
INSERT INTO public.employee VALUES ('foulen', NULL, NULL, NULL, NULL, NULL, 4);
INSERT INTO public.employee VALUES ('foulen', NULL, NULL, NULL, NULL, NULL, 5);
INSERT INTO public.employee VALUES ('foulen', NULL, NULL, NULL, NULL, NULL, 6);
INSERT INTO public.employee VALUES ('foulen', NULL, NULL, NULL, NULL, NULL, 7);


--
-- TOC entry 3095 (class 0 OID 16480)
-- Dependencies: 208
-- Data for Name: historique; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.historique VALUES ('aaaa', 'bbbb', 2021, 966336, 1);
INSERT INTO public.historique VALUES ('aaaa', 'bbbb', 2021, 966336, 2);


--
-- TOC entry 3094 (class 0 OID 16470)
-- Dependencies: 207
-- Data for Name: inventaire; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.inventaire VALUES (11, 1);
INSERT INTO public.inventaire VALUES (741258, 2);
INSERT INTO public.inventaire VALUES (741258, 3);
INSERT INTO public.inventaire VALUES (741258, 4);


--
-- TOC entry 3093 (class 0 OID 16467)
-- Dependencies: 206
-- Data for Name: inventaire_action; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.inventaire_action VALUES ('monastir', 'mg', 1);
INSERT INTO public.inventaire_action VALUES ('monastir', 'mg', 2);


--
-- TOC entry 3097 (class 0 OID 16489)
-- Dependencies: 210
-- Data for Name: inventaire_prix; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3096 (class 0 OID 16486)
-- Dependencies: 209
-- Data for Name: inventaire_produit; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3090 (class 0 OID 16449)
-- Dependencies: 203
-- Data for Name: magasin; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.magasin VALUES ('aziza', 'sousse', 1);
INSERT INTO public.magasin VALUES ('aziza', 'sousse', 2);


--
-- TOC entry 3089 (class 0 OID 16419)
-- Dependencies: 202
-- Data for Name: produit; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.produit VALUES ('dhaou', 'labelle', 521, 35553, 9887, 1);
INSERT INTO public.produit VALUES ('dhaou', 'labelle', 521, 35553, 9887, 2);
INSERT INTO public.produit VALUES ('dhaou', 'labelle', 521, 35553, 9887, 3);
INSERT INTO public.produit VALUES ('dhaou', 'labelle', 521, 35553, 9887, 4);
INSERT INTO public.produit VALUES ('dhaou', 'labelle', 521, 35553, 9887, 5);


--
-- TOC entry 3126 (class 0 OID 0)
-- Dependencies: 211
-- Name: comptes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.comptes_id_seq', 12, true);


--
-- TOC entry 3127 (class 0 OID 0)
-- Dependencies: 212
-- Name: date_action_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.date_action_id_seq', 3, true);


--
-- TOC entry 3128 (class 0 OID 0)
-- Dependencies: 213
-- Name: date_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.date_id_seq', 3, true);


--
-- TOC entry 3129 (class 0 OID 0)
-- Dependencies: 220
-- Name: employee_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.employee_id_seq', 7, true);


--
-- TOC entry 3130 (class 0 OID 0)
-- Dependencies: 219
-- Name: historique_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.historique_id_seq', 2, true);


--
-- TOC entry 3131 (class 0 OID 0)
-- Dependencies: 214
-- Name: inventaire_action_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.inventaire_action_id_seq', 2, true);


--
-- TOC entry 3132 (class 0 OID 0)
-- Dependencies: 218
-- Name: inventaire_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.inventaire_id_seq', 4, true);


--
-- TOC entry 3133 (class 0 OID 0)
-- Dependencies: 221
-- Name: inventaire_prix_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.inventaire_prix_id_seq', 1, false);


--
-- TOC entry 3134 (class 0 OID 0)
-- Dependencies: 215
-- Name: inventaire_produit_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.inventaire_produit_id_seq', 1, false);


--
-- TOC entry 3135 (class 0 OID 0)
-- Dependencies: 216
-- Name: magasin_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.magasin_id_seq', 2, true);


--
-- TOC entry 3136 (class 0 OID 0)
-- Dependencies: 217
-- Name: produit_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.produit_id_seq', 5, true);


--
-- TOC entry 2936 (class 2606 OID 16608)
-- Name: comptes comptes_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.comptes
    ADD CONSTRAINT comptes_pk PRIMARY KEY (id);


--
-- TOC entry 2946 (class 2606 OID 16528)
-- Name: date_action date_action_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.date_action
    ADD CONSTRAINT date_action_pk PRIMARY KEY (id);


--
-- TOC entry 2944 (class 2606 OID 16526)
-- Name: date date_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.date
    ADD CONSTRAINT date_pk PRIMARY KEY (id);


--
-- TOC entry 2938 (class 2606 OID 16606)
-- Name: employee employee_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.employee
    ADD CONSTRAINT employee_pk PRIMARY KEY (id);


--
-- TOC entry 2952 (class 2606 OID 16595)
-- Name: historique historique_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.historique
    ADD CONSTRAINT historique_pk PRIMARY KEY (id);


--
-- TOC entry 2948 (class 2606 OID 16539)
-- Name: inventaire_action inventaire_action_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.inventaire_action
    ADD CONSTRAINT inventaire_action_pk PRIMARY KEY (id);


--
-- TOC entry 2950 (class 2606 OID 16584)
-- Name: inventaire inventaire_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.inventaire
    ADD CONSTRAINT inventaire_pk PRIMARY KEY (id);


--
-- TOC entry 2956 (class 2606 OID 16619)
-- Name: inventaire_prix inventaire_prix_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.inventaire_prix
    ADD CONSTRAINT inventaire_prix_pk PRIMARY KEY (id);


--
-- TOC entry 2954 (class 2606 OID 16551)
-- Name: inventaire_produit inventaire_produit_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.inventaire_produit
    ADD CONSTRAINT inventaire_produit_pk PRIMARY KEY (id);


--
-- TOC entry 2942 (class 2606 OID 16562)
-- Name: magasin magasin_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.magasin
    ADD CONSTRAINT magasin_pk PRIMARY KEY (id);


--
-- TOC entry 2940 (class 2606 OID 16573)
-- Name: produit produit_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.produit
    ADD CONSTRAINT produit_pk PRIMARY KEY (id);


-- Completed on 2022-04-11 17:23:09

--
-- PostgreSQL database dump complete
--

