import React, { useState, useEffect } from 'react';
import { Search, Briefcase, Users, Building2, PlusCircle, MapPin, Phone, Mail, Globe, X } from 'lucide-react';

const Home = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('todos');
  
  // Inicializamos com arrays vazios; em useEffect carregamos dados estáticos caso necessario
  const [members, setMembers] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [jobs, setJobs] = useState([]);
  
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    descricao: '',
    categoria: '',
    localizacao: '',
    empresa: '',
    website: '',
    nomeEmpresa: '',
    tipoNegocio: '',
    numeroFuncionarios: '',
    tituloVaga: '',
    tipoContrato: '',
    salario: '',
    requisitos: ''
  });

  const categorias = [
    'Construção', 'Educação', 'Saúde', 'Tecnologia', 'Alimentação',
    'Beleza', 'Transporte', 'Consultoria', 'Design', 'Outros'
  ];

  // --- Dados estáticos de exemplo (mock) ---
  const sampleMembers = [
    {
      id: 1,
      nome: 'João Silva',
      telefone: '+258 84 123 4567',
      email: 'joao.silva@example.com',
      descricao: 'Eletricista com 10 anos de experiência. Instalações residenciais e comerciais.',
      categoria: 'Construção',
      localizacao: 'Maputo'
    },
    {
      id: 2,
      nome: 'Maria Costa',
      telefone: '+258 82 987 6543',
      email: 'maria.costa@example.com',
      descricao: 'Aulas de inglês e tradução. Experiência com jovens e adultos.',
      categoria: 'Educação',
      localizacao: 'Matola'
    },
    {
      id: 3,
      nome: 'Pedro Mbanze',
      telefone: '+258 82 333 2222',
      email: 'pedro.mbanze@example.com',
      descricao: 'Conserto e manutenção de computadores e redes domésticas.',
      categoria: 'Tecnologia',
      localizacao: 'Nampula'
    }
  ];

  const sampleCompanies = [
    {
      id: 1,
      nomeEmpresa: 'Oficina do Bairro Lda',
      descricao: 'Serviços de mecânica e revisão automóvel.',
      categoria: 'Transporte',
      tipoNegocio: 'Oficina Automóvel',
      telefone: '+258 84 555 1111',
      email: 'contato@oficinadobairro.co.mz',
      website: 'https://oficinadobairro.example',
      localizacao: 'Maputo',
      numeroFuncionarios: '8'
    },
    {
      id: 2,
      nomeEmpresa: 'Padaria Esperança',
      descricao: 'Produção de pães e bolos artesanais para eventos e atacado.',
      categoria: 'Alimentação',
      tipoNegocio: 'Padaria & Confeitaria',
      telefone: '+258 84 666 2222',
      email: 'vendas@padariaesperanca.example',
      website: 'https://padariaesperanca.example',
      localizacao: 'Beira',
      numeroFuncionarios: '6'
    }
  ];

  const sampleJobs = [
    {
      id: 1,
      tituloVaga: 'Assistente Administrativo',
      empresa: 'Padaria Esperança',
      descricao: 'Atendimento ao cliente, controlo de stock e suporte administrativo.',
      categoria: 'Alimentação',
      tipoContrato: 'Meio Período',
      salario: '10,000 MT',
      requisitos: 'Ensino médio, comunicação, Excel básico.',
      localizacao: 'Beira',
      telefone: '+258 84 666 2222',
      email: 'vagas@padariaesperanca.example'
    },
    {
      id: 2,
      tituloVaga: 'Técnico de Redes',
      empresa: 'Serviços TI Mz',
      descricao: 'Instalação e manutenção de redes; suporte remoto e presencial.',
      categoria: 'Tecnologia',
      tipoContrato: 'Contrato',
      salario: '20,000 MT',
      requisitos: 'Experiência em redes, certificações serão um plus.',
      localizacao: 'Maputo',
      telefone: '+258 84 777 3333',
      email: 'rh@servicosti.example'
    },
    {
      id: 3,
      tituloVaga: 'Padeiro',
      empresa: 'Padaria Esperança',
      descricao: 'Produção de pães e bolos para loja e encomendas.',
      categoria: 'Alimentação',
      tipoContrato: 'Tempo Integral',
      salario: '12,000 MT',
      requisitos: 'Experiência comprovada como padeiro.',
      localizacao: 'Beira',
      telefone: '+258 84 666 2222',
      email: 'vagas@padariaesperanca.example'
    }
  ];
  // --- fim dos dados estáticos ---


  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadData = async () => {
    // tenta carregar de window.storage (se estiver implementado), senão usa os mocks
    try {
      if (window && window.storage && typeof window.storage.get === 'function') {
        const membersData = await window.storage.get('members');
        const companiesData = await window.storage.get('companies');
        const jobsData = await window.storage.get('jobs');
        
        if (membersData && membersData.value) setMembers(JSON.parse(membersData.value));
        else setMembers(sampleMembers);

        if (companiesData && companiesData.value) setCompanies(JSON.parse(companiesData.value));
        else setCompanies(sampleCompanies);

        if (jobsData && jobsData.value) setJobs(JSON.parse(jobsData.value));
        else setJobs(sampleJobs);
      } else {
        // se não houver window.storage, carregar os dados estáticos
        setMembers(sampleMembers);
        setCompanies(sampleCompanies);
        setJobs(sampleJobs);
      }
    } catch (error) {
      // fallback para mocks se algo falhar
      console.log('Não foi possível carregar de window.storage — usando dados de exemplo.');
      setMembers(sampleMembers);
      setCompanies(sampleCompanies);
      setJobs(sampleJobs);
    }
  };

  const saveData = async (type, data) => {
    // tenta persistir em window.storage se existir — caso contrário apenas mantem em estado
    try {
      if (window && window.storage && typeof window.storage.set === 'function') {
        await window.storage.set(type, JSON.stringify(data));
      }
    } catch (error) {
      console.error('Erro ao salvar em window.storage:', error);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const openModal = (type) => {
    setModalType(type);
    setShowModal(true);
    setFormData({
      nome: '', telefone: '', email: '', descricao: '', categoria: '',
      localizacao: '', empresa: '', website: '', nomeEmpresa: '',
      tipoNegocio: '', numeroFuncionarios: '', tituloVaga: '',
      tipoContrato: '', salario: '', requisitos: ''
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (modalType === 'member') {
      const newMember = {
        id: Date.now(),
        ...formData,
        dataCriacao: new Date().toISOString()
      };
      const updated = [...members, newMember];
      setMembers(updated);
      await saveData('members', updated);
    } else if (modalType === 'company') {
      const newCompany = {
        id: Date.now(),
        ...formData,
        dataCriacao: new Date().toISOString()
      };
      const updated = [...companies, newCompany];
      setCompanies(updated);
      await saveData('companies', updated);
    } else if (modalType === 'job') {
      const newJob = {
        id: Date.now(),
        ...formData,
        dataCriacao: new Date().toISOString()
      };
      const updated = [...jobs, newJob];
      setJobs(updated);
      await saveData('jobs', updated);
    }
    
    setShowModal(false);
  };

  const filterItems = (items) => {
    return items.filter(item => {
      const matchesSearch = 
        (item.nome && item.nome.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (item.descricao && item.descricao.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (item.nomeEmpresa && item.nomeEmpresa.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (item.tituloVaga && item.tituloVaga.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (item.empresa && item.empresa.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = filterCategory === 'todos' || item.categoria === filterCategory;
      
      return matchesSearch && matchesCategory;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-2 rounded-lg">
                <Users className="text-white" size={32} />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Rede de Negócios</h1>
                <p className="text-sm text-gray-600">Comunidade da Igreja</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab('home')}
              className={`py-4 px-2 border-b-2 font-medium transition-colors ${
                activeTab === 'home'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-600 hover:text-gray-800'
              }`}
            >
              Início
            </button>
            <button
              onClick={() => setActiveTab('members')}
              className={`py-4 px-2 border-b-2 font-medium transition-colors ${
                activeTab === 'members'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-600 hover:text-gray-800'
              }`}
            >
              Prestadores de Serviços
            </button>
            <button
              onClick={() => setActiveTab('companies')}
              className={`py-4 px-2 border-b-2 font-medium transition-colors ${
                activeTab === 'companies'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-600 hover:text-gray-800'
              }`}
            >
              Empresas
            </button>
            <button
              onClick={() => setActiveTab('jobs')}
              className={`py-4 px-2 border-b-2 font-medium transition-colors ${
                activeTab === 'jobs'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-600 hover:text-gray-800'
              }`}
            >
              Oportunidades de Emprego
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {activeTab === 'home' && (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Bem-vindo à Nossa Rede de Negócios
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Conectando membros da nossa comunidade através de oportunidades de negócios e serviços
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Users className="text-blue-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Prestadores de Serviços</h3>
                <p className="text-gray-600 mb-4">Encontre membros que oferecem diversos serviços</p>
                <button
                  onClick={() => openModal('member')}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors w-full"
                >
                  Registar Serviço
                </button>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Building2 className="text-indigo-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Empresas</h3>
                <p className="text-gray-600 mb-4">Descubra empresas da nossa comunidade</p>
                <button
                  onClick={() => openModal('company')}
                  className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors w-full"
                >
                  Registar Empresa
                </button>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Briefcase className="text-purple-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Oportunidades</h3>
                <p className="text-gray-600 mb-4">Encontre ou publique vagas de emprego</p>
                <button
                  onClick={() => openModal('job')}
                  className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors w-full"
                >
                  Publicar Vaga
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Estatísticas</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">{members.length}</div>
                  <div className="text-gray-600">Prestadores de Serviços</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-indigo-600 mb-2">{companies.length}</div>
                  <div className="text-gray-600">Empresas Registadas</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2">{jobs.length}</div>
                  <div className="text-gray-600">Vagas Disponíveis</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'members' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-bold text-gray-800">Prestadores de Serviços</h2>
              <button
                onClick={() => openModal('member')}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
              >
                <PlusCircle size={20} />
                <span>Adicionar Serviço</span>
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="text"
                      placeholder="Pesquisar por nome ou serviço..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <select
                  value={filterCategory}
                  onChange={(e) => setFilterCategory(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="todos">Todas Categorias</option>
                  {categorias.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filterItems(members).map(member => (
                  <div key={member.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center">
                        <Users className="text-blue-600" size={24} />
                      </div>
                      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                        {member.categoria}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{member.nome}</h3>
                    <p className="text-gray-600 mb-4">{member.descricao}</p>
                    <div className="space-y-2 text-sm text-gray-600">
                      {member.telefone && (
                        <div className="flex items-center space-x-2">
                          <Phone size={16} />
                          <span>{member.telefone}</span>
                        </div>
                      )}
                      {member.email && (
                        <div className="flex items-center space-x-2">
                          <Mail size={16} />
                          <span>{member.email}</span>
                        </div>
                      )}
                      {member.localizacao && (
                        <div className="flex items-center space-x-2">
                          <MapPin size={16} />
                          <span>{member.localizacao}</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {filterItems(members).length === 0 && (
                <div className="text-center py-12 text-gray-500">
                  Nenhum prestador de serviços encontrado
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'companies' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-bold text-gray-800">Empresas</h2>
              <button
                onClick={() => openModal('company')}
                className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors flex items-center space-x-2"
              >
                <PlusCircle size={20} />
                <span>Adicionar Empresa</span>
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="text"
                      placeholder="Pesquisar empresas..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <select
                  value={filterCategory}
                  onChange={(e) => setFilterCategory(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                >
                  <option value="todos">Todas Categorias</option>
                  {categorias.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {filterItems(companies).map(company => (
                  <div key={company.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center">
                        <Building2 className="text-indigo-600" size={24} />
                      </div>
                      <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-3 py-1 rounded-full">
                        {company.categoria}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{company.nomeEmpresa}</h3>
                    <p className="text-gray-600 mb-4">{company.descricao}</p>
                    <div className="space-y-2 text-sm text-gray-600">
                      {company.tipoNegocio && (
                        <div className="flex items-center space-x-2">
                          <Briefcase size={16} />
                          <span>{company.tipoNegocio}</span>
                        </div>
                      )}
                      {company.telefone && (
                        <div className="flex items-center space-x-2">
                          <Phone size={16} />
                          <span>{company.telefone}</span>
                        </div>
                      )}
                      {company.email && (
                        <div className="flex items-center space-x-2">
                          <Mail size={16} />
                          <span>{company.email}</span>
                        </div>
                      )}
                      {company.website && (
                        <div className="flex items-center space-x-2">
                          <Globe size={16} />
                          <a href={company.website} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">
                            {company.website}
                          </a>
                        </div>
                      )}
                      {company.localizacao && (
                        <div className="flex items-center space-x-2">
                          <MapPin size={16} />
                          <span>{company.localizacao}</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {filterItems(companies).length === 0 && (
                <div className="text-center py-12 text-gray-500">
                  Nenhuma empresa encontrada
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'jobs' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-bold text-gray-800">Oportunidades de Emprego</h2>
              <button
                onClick={() => openModal('job')}
                className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors flex items-center space-x-2"
              >
                <PlusCircle size={20} />
                <span>Publicar Vaga</span>
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="text"
                      placeholder="Pesquisar vagas..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <select
                  value={filterCategory}
                  onChange={(e) => setFilterCategory(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="todos">Todas Categorias</option>
                  {categorias.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-4">
                {filterItems(jobs).map(job => (
                  <div key={job.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-1">{job.tituloVaga}</h3>
                        <p className="text-gray-600">{job.empresa}</p>
                      </div>
                      <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-3 py-1 rounded-full">
                        {job.categoria}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{job.descricao}</p>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      {job.tipoContrato && (
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <Briefcase size={16} />
                          <span>{job.tipoContrato}</span>
                        </div>
                      )}
                      {job.salario && (
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <span className="font-semibold">Salário:</span>
                          <span>{job.salario}</span>
                        </div>
                      )}
                      {job.localizacao && (
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <MapPin size={16} />
                          <span>{job.localizacao}</span>
                        </div>
                      )}
                    </div>
                    {job.requisitos && (
                      <div className="text-sm text-gray-600">
                        <span className="font-semibold">Requisitos:</span> {job.requisitos}
                      </div>
                    )}
                    <div className="mt-4 flex items-center space-x-4 text-sm text-gray-600">
                      {job.telefone && (
                        <div className="flex items-center space-x-2">
                          <Phone size={16} />
                          <span>{job.telefone}</span>
                        </div>
                      )}
                      {job.email && (
                        <div className="flex items-center space-x-2">
                          <Mail size={16} />
                          <span>{job.email}</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {filterItems(jobs).length === 0 && (
                <div className="text-center py-12 text-gray-500">
                  Nenhuma vaga encontrada
                </div>
              )}
            </div>
          </div>
        )}
      </main>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center sticky top-0 bg-white">
              <h3 className="text-2xl font-bold text-gray-800">
                {modalType === 'member' && 'Registar Prestador de Serviço'}
                {modalType === 'company' && 'Registar Empresa'}
                {modalType === 'job' && 'Publicar Vaga de Emprego'}
              </h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              {modalType === 'member' && (
                <>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Nome Completo *</label>
                    <input
                      type="text"
                      name="nome"
                      value={formData.nome}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Categoria *</label>
                    <select
                      name="categoria"
                      value={formData.categoria}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Selecione uma categoria</option>
                      {categorias.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Descrição do Serviço *</label>
                    <textarea
                      name="descricao"
                      value={formData.descricao}
                      onChange={handleInputChange}
                      required
                      rows="4"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Telefone *</label>
                    <input
                      type="tel"
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Localização</label>
                    <input
                      type="text"
                      name="localizacao"
                      value={formData.localizacao}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </>
              )}

              {modalType === 'company' && (
                <>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Nome da Empresa *</label>
                    <input
                      type="text"
                      name="nomeEmpresa"
                      value={formData.nomeEmpresa}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Categoria *</label>
                    <select
                      name="categoria"
                      value={formData.categoria}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    >
                      <option value="">Selecione uma categoria</option>
                      {categorias.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Tipo de Negócio</label>
                    <input
                      type="text"
                      name="tipoNegocio"
                      value={formData.tipoNegocio}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Descrição da Empresa *</label>
                    <textarea
                      name="descricao"
                      value={formData.descricao}
                      onChange={handleInputChange}
                      required
                      rows="4"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Telefone *</label>
                    <input
                      type="tel"
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Website</label>
                    <input
                      type="url"
                      name="website"
                      value={formData.website}
                      onChange={handleInputChange}
                      placeholder="https://"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Localização</label>
                    <input
                      type="text"
                      name="localizacao"
                      value={formData.localizacao}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Número de Funcionários</label>
                    <input
                      type="text"
                      name="numeroFuncionarios"
                      value={formData.numeroFuncionarios}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  </div>
                </>
              )}

              {modalType === 'job' && (
                <>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Título da Vaga *</label>
                    <input
                      type="text"
                      name="tituloVaga"
                      value={formData.tituloVaga}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Empresa *</label>
                    <input
                      type="text"
                      name="empresa"
                      value={formData.empresa}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Categoria *</label>
                    <select
                      name="categoria"
                      value={formData.categoria}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      <option value="">Selecione uma categoria</option>
                      {categorias.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Descrição da Vaga *</label>
                    <textarea
                      name="descricao"
                      value={formData.descricao}
                      onChange={handleInputChange}
                      required
                      rows="4"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Tipo de Contrato</label>
                    <select
                      name="tipoContrato"
                      value={formData.tipoContrato}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      <option value="">Selecione o tipo</option>
                      <option value="Tempo Integral">Tempo Integral</option>
                      <option value="Meio Período">Meio Período</option>
                      <option value="Freelance">Freelance</option>
                      <option value="Estágio">Estágio</option>
                      <option value="Contrato">Contrato</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Salário</label>
                    <input
                      type="text"
                      name="salario"
                      value={formData.salario}
                      onChange={handleInputChange}
                      placeholder="Ex: 15,000 - 25,000 MT"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Requisitos</label>
                    <textarea
                      name="requisitos"
                      value={formData.requisitos}
                      onChange={handleInputChange}
                      rows="3"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Localização</label>
                    <input
                      type="text"
                      name="localizacao"
                      value={formData.localizacao}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Telefone de Contacto *</label>
                    <input
                      type="tel"
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email de Contacto</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                </>
              )}

              <div className="flex justify-end space-x-4 pt-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className={`px-6 py-3 rounded-lg text-white transition-colors ${
                    modalType === 'member' ? 'bg-blue-600 hover:bg-blue-700' :
                    modalType === 'company' ? 'bg-indigo-600 hover:bg-indigo-700' :
                    'bg-purple-600 hover:bg-purple-700'
                  }`}
                >
                  Registar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
