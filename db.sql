--
-- PostgreSQL database dump
--

-- Dumped from database version 13.5 (Debian 13.5-0+deb11u1)
-- Dumped by pg_dump version 13.3

-- Started on 2022-03-31 17:31:23

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'SQL_ASCII';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

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
-- TOC entry 208 (class 1259 OID 16470)
-- Name: inventaire; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.inventaire (
    "‪id" numeric,
    id_inventaire numeric
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
-- TOC entry 3016 (class 0 OID 16455)
-- Dependencies: 205
-- Data for Name: date; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3017 (class 0 OID 16461)
-- Dependencies: 206
-- Data for Name: date_action; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3019 (class 0 OID 16470)
-- Dependencies: 208
-- Data for Name: inventaire; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3018 (class 0 OID 16467)
-- Dependencies: 207
-- Data for Name: inventaire_action; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3015 (class 0 OID 16449)
-- Dependencies: 204
-- Data for Name: magasin; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3013 (class 0 OID 16419)
-- Dependencies: 202
-- Data for Name: produit; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.produit VALUES ('dhaou', 'labelle', 521, 35553, 9887, NULL);
INSERT INTO public.produit VALUES ('dhaou', 'labelle', 521, 35553, 9887, 8524);


--
-- TOC entry 3014 (class 0 OID 16443)
-- Dependencies: 203
-- Data for Name: utilisateur; Type: TABLE DATA; Schema: public; Owner: postgres
--



-- Completed on 2022-03-31 17:31:26

--
-- PostgreSQL database dump complete
--

