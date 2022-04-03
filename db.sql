


--
-- TOC entry 205 (class 1259 OID 16455)
-- Name: date; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.date (
    id numeric,
    heure numeric,
    jour numeric,
    mois numeric,
    "année" numeric
);


ALTER TABLE public.date OWNER TO postgres;

--
-- TOC entry 206 (class 1259 OID 16461)
-- Name: date_action; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.date_action (
    id numeric,
    heure numeric,
    jour numeric,
    mois numeric,
    "année" numeric
);


ALTER TABLE public.date_action OWNER TO postgres;

--
-- TOC entry 201 (class 1259 OID 16388)
-- Name: employee; Type: TABLE; Schema: public; Owner: postgres
--



--
-- TOC entry 209 (class 1259 OID 16480)
-- Name: historique; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.historique (
    id numeric,
    type_inventaire character varying,
    lieu_inventaire character varying,
    date_inventaire numeric,
    quantite numeric
);


ALTER TABLE public.historique OWNER TO postgres;

--
-- TOC entry 208 (class 1259 OID 16470)
-- Name: inventaire; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.inventaire (
    id_inventaire numeric,
    id numeric
);


ALTER TABLE public.inventaire OWNER TO postgres;

--
-- TOC entry 207 (class 1259 OID 16467)
-- Name: inventaire_action; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.inventaire_action (
    id numeric,
    lieu character varying,
    magasin character varying
);


ALTER TABLE public.inventaire_action OWNER TO postgres;

--
-- TOC entry 204 (class 1259 OID 16449)
-- Name: magasin; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.magasin (
    nom_magasin character varying,
    lieu_magasin character varying,
    id numeric
);


ALTER TABLE public.magasin OWNER TO postgres;

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
    id numeric
);


ALTER TABLE public.produit OWNER TO postgres;

--
-- TOC entry 203 (class 1259 OID 16443)
-- Name: utilisateur; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.utilisateur (
    id numeric,
    nom character varying,
    prenom character varying
);


ALTER TABLE public.utilisateur OWNER TO postgres;

--
-- TOC entry 3027 (class 0 OID 16385)
-- Dependencies: 200
-- Data for Name: comptes; Type: TABLE DATA; Schema: public; Owner: postgres
--


--
-- TOC entry 3032 (class 0 OID 16455)
-- Dependencies: 205
-- Data for Name: date; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.date VALUES (88888, 1343, 31, 3, 2022);
INSERT INTO public.date VALUES (88888, 1343, 31, 3, 2022);


--
-- TOC entry 3033 (class 0 OID 16461)
-- Dependencies: 206
-- Data for Name: date_action; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.date_action VALUES (758412, 1509, 1, 4, 2021);


--
-- TOC entry 3028 (class 0 OID 16388)
-- Dependencies: 201
-- Data for Name: employee; Type: TABLE DATA; Schema: public; Owner: postgres
--




--
-- TOC entry 3036 (class 0 OID 16480)
-- Dependencies: 209
-- Data for Name: historique; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.historique VALUES (14258, 'aaaa', 'bbbb', 2021, 966336);


--
-- TOC entry 3035 (class 0 OID 16470)
-- Dependencies: 208
-- Data for Name: inventaire; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.inventaire VALUES (11, NULL);
INSERT INTO public.inventaire VALUES (741258, 746681);


--
-- TOC entry 3034 (class 0 OID 16467)
-- Dependencies: 207
-- Data for Name: inventaire_action; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.inventaire_action VALUES (852369, 'monastir', 'mg');
INSERT INTO public.inventaire_action VALUES (852369, 'monastir', 'mg');


--
-- TOC entry 3031 (class 0 OID 16449)
-- Dependencies: 204
-- Data for Name: magasin; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.magasin VALUES ('aziza', 'sousse', 746681);


--
-- TOC entry 3029 (class 0 OID 16419)
-- Dependencies: 202
-- Data for Name: produit; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.produit VALUES ('dhaou', 'labelle', 521, 35553, 9887, NULL);
INSERT INTO public.produit VALUES ('dhaou', 'labelle', 521, 35553, 9887, 8524);
INSERT INTO public.produit VALUES ('dhaou', 'labelle', 521, 35553, 9887, 8524);


--
-- TOC entry 3030 (class 0 OID 16443)
-- Dependencies: 203
-- Data for Name: utilisateur; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.utilisateur VALUES (741258, 'dhaouu', 'Amri');


-- Completed on 2022-04-03 14:34:26

--
-- PostgreSQL database dump complete
--

