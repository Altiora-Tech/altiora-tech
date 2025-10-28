import { Brain, Code, Target, Rocket, Cpu, Database, Smartphone, Cloud, Shield, BarChart, Zap, Lock, Server, Wifi, CpuIcon } from 'lucide-react';

export const categories = {
  'inteligencia-artificial': {
    name: 'Inteligencia Artificial',
    description: 'Artículos sobre IA, machine learning y automatización',
    icon: Brain
  },
  'desarrollo-web': {
    name: 'Desarrollo Web',
    description: 'Tecnologías y tendencias en desarrollo web moderno',
    icon: Code
  },
  'estrategia-digital': {
    name: 'Estrategia Digital',
    description: 'Cómo desarrollar una estrategia digital efectiva',
    icon: Target
  },
  'startups': {
    name: 'Startups',
    description: 'Consejos y tendencias para emprendedores tecnológicos',
    icon: Rocket
  },
  'tecnologia': {
    name: 'Tecnología',
    description: 'Noticias y análisis sobre tecnología',
    icon: Cpu
  },
  'cloud-computing': {
    name: 'Cloud Computing',
    description: 'Soluciones y servicios en la nube',
    icon: Cloud
  },
  'seguridad-informatica': {
    name: 'Seguridad Informática',
    description: 'Ciberseguridad y protección de datos',
    icon: Shield
  },
  'analisis-datos': {
    name: 'Análisis de Datos',
    description: 'Big Data, análisis y visualización',
    icon: BarChart
  },
  'iot': {
    name: 'Internet de las Cosas',
    description: 'Dispositivos conectados y hogar inteligente',
    icon: Wifi
  },
  'devops': {
    name: 'DevOps',
    description: 'Desarrollo y operaciones de TI',
    icon: Server
  }
} as const;
