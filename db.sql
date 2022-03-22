--
-- PostgreSQL database dump
--

-- Dumped from database version 13.5 (Debian 13.5-0+deb11u1)
-- Dumped by pg_dump version 13.3

-- Started on 2022-03-22 23:29:30

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

--
-- TOC entry 3 (class 2615 OID 2200)
-- Name: public; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA public;


ALTER SCHEMA public OWNER TO postgres;

--
-- TOC entry 3000 (class 0 OID 0)
-- Dependencies: 3
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON SCHEMA public IS 'standard public schema';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 200 (class 1259 OID 16385)
-- Name: comptes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.comptes (
    id numeric NOT NULL,
    phone character varying,
    email character varying,
    password character varying
);


ALTER TABLE public.comptes OWNER TO postgres;

--
-- TOC entry 201 (class 1259 OID 16388)
-- Name: employee; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.employee (
    id numeric NOT NULL,
    nom character varying
);


ALTER TABLE public.employee OWNER TO postgres;

--
-- TOC entry 202 (class 1259 OID 16419)
-- Name: produit; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.produit (
    nom character varying,
    labelle character varying,
    quantite numeric,
    codeean numeric,
    notre_prix numeric
);


ALTER TABLE public.produit OWNER TO postgres;

--
-- TOC entry 2992 (class 0 OID 16385)
-- Dependencies: 200
-- Data for Name: comptes; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.comptes VALUES (125532, '+21621556', 'aaaaa@gmail.com', 'a123s1');
INSERT INTO public.comptes VALUES (123722, '+21621556', 'aaaaa@gmail.com', 'a123s1');
INSERT INTO public.comptes VALUES (1333333, '+21621556', 'aaaaa@gmail.com', 'a123s1');
INSERT INTO public.comptes VALUES (1222222222, '+21621556', 'aaaaa@gmail.com', 'a123s1');
INSERT INTO public.comptes VALUES (1222222222222222300, '+21621556', 'aaaaa@gmail.com', 'a123s1');
INSERT INTO public.comptes VALUES (1222222222222222300, '+21621556', 'aaaaa@gmail.com', 'a123s1');


--
-- TOC entry 2993 (class 0 OID 16388)
-- Dependencies: 201
-- Data for Name: employee; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.employee VALUES (12445, 'foulen');
INSERT INTO public.employee VALUES (1295, 'foulen');
INSERT INTO public.employee VALUES (12958, 'foulen');
INSERT INTO public.employee VALUES (1222222, 'foulen');
INSERT INTO public.employee VALUES (1222222, 'foulen');


--
-- TOC entry 2994 (class 0 OID 16419)
-- Dependencies: 202
-- Data for Name: produit; Type: TABLE DATA; Schema: public; Owner: postgres
--



-- Completed on 2022-03-22 23:29:34

--
-- PostgreSQL database dump complete
--

