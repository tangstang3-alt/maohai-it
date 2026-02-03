import React, { useState } from 'react';
import { 
  Briefcase, 
  Menu, 
  X, 
  UserCheck, 
  ArrowRight, 
  FileText, 
  ShieldCheck, 
  Monitor, 
  Cpu, 
  Server, 
  Printer, 
  Building, 
  Phone, 
  Mail, 
  MessageCircle, 
  MapPin, 
  CheckCircle 
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lang, setLang] = useState('th'); // 'th', 'en', 'cn'
  const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success, error
  const [showPopup, setShowPopup] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    // Formspree URL ของคุณ
    const FORMSPREE_URL = "https://formspree.io/f/mnjzravk"; 

    try {
        const response = await fetch(FORMSPREE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            setFormStatus('success');
            setShowPopup(true);
            e.target.reset();
        } else {
            setFormStatus('error');
            alert("เกิดข้อผิดพลาดในการส่ง กรุณาติดต่อทางไลน์หรือเบอร์โทรครับ");
        }
    } catch (error) {
        setFormStatus('error');
        alert("ระบบขัดข้อง กรุณาติดต่อทางไลน์หรือเบอร์โทรครับ");
    }
  };

  const closePopup = () => {
    setShowPopup(false);
    setFormStatus('idle');
  };

  const t = {
    th: {
      nav_products: "งานรับเหมาและบริการ",
      nav_process: "ขั้นตอนการทำงาน",
      nav_about: "เกี่ยวกับเรา",
      nav_quote: "ติดต่อ / ขอใบเสนอราคา",
      hero_badge: "ฟรีแลนซ์/ผู้รับเหมาไอทีสำหรับสำนักงาน",
      hero_title_1: "รับเหมาจัดหาอุปกรณ์ไอที",
      hero_title_2: "ครบวงจรสำหรับสำนักงาน",
      hero_desc: "บริการรับเหมาจัดซื้อ-จัดหา แบบมืออาชีพ (Professional Individual Contractor) เน้นความคล่องตัว รับงานโครงการ ล็อตใหญ่ และงานประมูล",
      hero_cta_primary: "ติดต่อ / ขอใบเสนอราคา",
      hero_cta_secondary: "ดูขอบเขตงาน",
      trust_tax: "จริงใจ ไม่ทิ้งงาน",
      trust_tax_desc: "รับประกันผลงานหลังส่งมอบ",
      trust_price: "ราคาผู้รับเหมา",
      trust_price_desc: "เน้นดีลจบไว ราคาคุยกันได้",
      trust_delivery: "บริการแบบส่วนตัว",
      trust_delivery_desc: "ดูแลเองทุกขั้นตอน",
      services_header: "บริการรับเหมาของเรา",
      services_sub: "รับงานจัดหาและดูแลระบบไอที",
      service_1_title: "รับเหมาจัดหาคอมพิวเตอร์",
      service_1_desc: "จัดหา PC, Notebook ล็อตใหญ่ตามงบประมาณ สำหรับออฟฟิศเปิดใหม่",
      service_2_title: "รับซื้อ/จัดหาอะไหล่ IT",
      service_2_desc: "รับเหมาจัดหาอะไหล่ซ่อมบำรุง หรือรับซื้ออุปกรณ์เดิมตามตกลง",
      service_3_title: "งานวางระบบ Network",
      service_3_desc: "รับงานเดินสาย LAN ติดตั้ง Wi-Fi และตู้ Rack แบบจบงานไว",
      service_4_title: "ซัพพลายวัสดุสิ้นเปลือง",
      service_4_desc: "จัดส่งหมึกพิมพ์และอุปกรณ์สำนักงาน ต่อเนื่องรายเดือน",
      service_5_title: "บริการจัดซื้อตามสั่ง",
      service_5_desc: "รับหน้าที่จัดหาสินค้าตามใบสั่งซื้อ (PO) ของลูกค้า",
      service_6_title: "งานประมูล/ราชการ",
      service_6_desc: "พร้อมทำเอกสารยื่นซอง และเป็นคู่เทียบราคา",
      process_header: "ขั้นตอนการดำเนินงาน",
      process_sub: "ทำงานกระชับ รวดเร็ว ตรงไปตรงมา",
      step_1: "แจ้งรายละเอียด",
      step_1_desc: "บอกสิ่งที่ต้องการ/งบประมาณ",
      step_2: "เสนอราคา",
      step_2_desc: "ส่งใบเสนอราคาให้พิจารณา",
      step_3: "ตกลง/มัดจำ",
      step_3_desc: "ยืนยันการจ้างงาน/สั่งซื้อ",
      step_4: "ส่งมอบงาน",
      step_4_desc: "ส่งของ/ติดตั้ง พร้อมบิลรับเงิน",
      contact_header: "ติดต่อสอบถาม",
      contact_sub: "ปรึกษาฟรี คุยง่าย เป็นกันเอง",
      contact_phone: "โทรศัพท์",
      contact_email: "อีเมล",
      contact_line: "ไลน์ไอดี",
      contact_line_oa: "LINE Official",
      form_header: "ฟอร์มติดต่อ / ขอราคา",
      form_name: "ชื่อผู้ติดต่อ",
      form_comp: "บริษัท/หน่วยงาน",
      form_tel: "เบอร์โทรศัพท์",
      form_detail: "รายละเอียดที่ต้องการให้รับเหมา/จัดหา",
      form_btn: "ส่งข้อมูลติดต่อ",
      footer_rights: "สงวนลิขสิทธิ์ข้อมูล",
      popup_title: "ส่งข้อมูลสำเร็จ!",
      popup_message: "ทีมงาน MaoHai IT ได้รับข้อมูลแล้ว\nจะรีบติดต่อกลับให้เร็วที่สุดครับ",
      popup_button: "ตกลง"
    },
    en: {
      nav_products: "Services",
      nav_process: "Process",
      nav_about: "About Us",
      nav_quote: "Contact / Request Quote",
      hero_badge: "Professional IT Contractor for Offices",
      hero_title_1: "IT Procurement",
      hero_title_2: "& Contracting Service",
      hero_desc: "Professional Individual Contractor services for B2B. Flexible, fast, and reliable sourcing for bulk hardware and spare parts.",
      hero_cta_primary: "Contact / Request Quote",
      hero_cta_secondary: "Our Services",
      trust_tax: "Reliable & Sincere",
      trust_tax_desc: "Work Guaranteed",
      trust_price: "Contractor Pricing",
      trust_price_desc: "Negotiable & Flexible",
      trust_delivery: "Personalized Service",
      trust_delivery_desc: "Direct care by owner",
      services_header: "Our Expertise",
      services_sub: "Comprehensive IT Contracting Solutions",
      service_1_title: "Bulk Computer Supply",
      service_1_desc: "Sourcing PC & Laptops for new offices based on budget.",
      service_2_title: "Parts Supply & Buyback",
      service_2_desc: "Sourcing maintenance parts or buying back old equipment.",
      service_3_title: "Network Installation",
      service_3_desc: "LAN cabling and Wi-Fi installation services.",
      service_4_title: "Office Supplies",
      service_4_desc: "Regular supply of printer ink and consumables.",
      service_5_title: "Procurement Service",
      service_5_desc: "Sourcing items according to your Purchase Order (PO).",
      service_6_title: "Bidding Support",
      service_6_desc: "Support for tenders and price comparison.",
      process_header: "Workflow",
      process_sub: "Simple, Fast, and Direct",
      step_1: "Requirement",
      step_1_desc: "Tell us what you need",
      step_2: "Quotation",
      step_2_desc: "We offer the best price",
      step_3: "Confirm",
      step_3_desc: "Confirm order/Deposit",
      step_4: "Delivery",
      step_4_desc: "Delivery with Receipt",
      contact_header: "Contact Us",
      contact_sub: "Free consultation, direct line.",
      contact_phone: "Tel",
      contact_email: "Email",
      contact_line: "Line ID",
      contact_line_oa: "LINE Official",
      form_header: "Contact / Quote Form",
      form_name: "Contact Name",
      form_comp: "Company Name",
      form_tel: "Phone Number",
      form_detail: "Details / Requirements",
      form_btn: "Submit",
      footer_rights: "All Rights Reserved",
      popup_title: "Success!",
      popup_message: "We have received your request.\nOur team will contact you shortly.",
      popup_button: "OK"
    },
    cn: {
      nav_products: "服务项目",
      nav_process: "合作流程",
      nav_about: "关于我们",
      nav_quote: "联系我们 / 索取报价",
      hero_badge: "专业IT承包商",
      hero_title_1: "IT设备采购",
      hero_title_2: "与工程承包服务",
      hero_desc: "专业的个人承包商服务。灵活、快速、可靠的大宗硬件及配件采购服务。",
      hero_cta_primary: "联系我们 / 索取报价",
      hero_cta_secondary: "查看服务",
      trust_tax: "诚信可靠",
      trust_tax_desc: "售后服务有保障",
      trust_price: "承包商价格",
      trust_price_desc: "价格灵活可谈",
      trust_delivery: "专属服务",
      trust_delivery_desc: "全程亲自跟进",
      services_header: "我们的专长",
      services_sub: "全方位IT承包解决方案",
      service_1_title: "大宗电脑供应",
      service_1_desc: "根据预算为新办公室提供台式机和笔记本电脑。",
      service_2_title: "配件供应与回购",
      service_2_desc: "提供维修配件或回购旧设备。",
      service_3_title: "网络安装工程",
      service_3_desc: "局域网布线及Wi-Fi安装服务。",
      service_4_title: "办公耗材供应",
      service_4_desc: "定期供应打印机墨盒及耗材。",
      service_5_title: "代采购服务",
      service_5_desc: "根据您的采购订单(PO)进行采购。",
      service_6_title: "投标支持",
      service_6_desc: "支持投标及提供比价文件。",
      process_header: "合作流程",
      process_sub: "简单、快速、直接",
      step_1: "需求沟通",
      step_1_desc: "告知您的需求",
      step_2: "报价",
      step_2_desc: "提供最佳报价",
      step_3: "确认",
      step_3_desc: "确认订单或支付定金",
      step_4: "交付",
      step_4_desc: "送货并提供收据",
      contact_header: "联系我们",
      contact_sub: "免费咨询，直接沟通",
      contact_phone: "电话",
      contact_email: "电子邮箱",
      contact_line: "Line ID",
      contact_line_oa: "官方 LINE",
      form_header: "联系 / 询价单",
      form_name: "联系人姓名",
      form_comp: "公司/单位名称",
      form_tel: "联系电话",
      form_detail: "需求详情",
      form_btn: "提交信息",
      footer_rights: "版权所有",
      popup_title: "提交成功！",
      popup_message: "我们已收到您的请求\n我们将尽快与您联系",
      popup_button: "确定"
    }
  };

  const currentT = t[lang];

  return (
    <div className="font-sans text-gray-800 bg-gray-50 min-h-screen flex flex-col relative">
      
      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-[100] flex items-center justify-center p-4 backdrop-blur-sm transition-all duration-300">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full text-center transform scale-100 animate-[fadeIn_0.3s_ease-out]">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="text-green-500 w-10 h-10" strokeWidth={3} />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">{currentT.popup_title}</h3>
            <p className="text-gray-600 mb-8 whitespace-pre-line leading-relaxed">
              {currentT.popup_message}
            </p>
            <button 
              onClick={closePopup}
              className="w-full py-3 bg-blue-900 hover:bg-blue-800 text-white font-bold rounded-lg transition transform hover:scale-[1.02] shadow-lg"
            >
              {currentT.popup_button}
            </button>
          </div>
        </div>
      )}

      {/* Top Bar for Language */}
      <div className="bg-slate-900 text-gray-300 text-sm py-2 px-4 border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex justify-end items-center space-x-4">
            <span className="hidden sm:inline text-gray-400 text-xs uppercase tracking-wider mr-2">Select Language:</span>
            <button 
                onClick={() => setLang('th')} 
                className={`hover:text-white transition ${lang === 'th' ? 'text-white font-bold underline decoration-orange-500 underline-offset-4' : ''}`}
            >
                TH
            </button>
            <span className="text-gray-600">|</span>
            <button 
                onClick={() => setLang('en')} 
                className={`hover:text-white transition ${lang === 'en' ? 'text-white font-bold underline decoration-orange-500 underline-offset-4' : ''}`}
            >
                ENG
            </button>
            <span className="text-gray-600">|</span>
            <button 
                onClick={() => setLang('cn')} 
                className={`hover:text-white transition ${lang === 'cn' ? 'text-white font-bold underline decoration-orange-500 underline-offset-4' : ''}`}
            >
                中文
            </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex-shrink-0 flex items-center gap-3">
              <div className="bg-blue-900 text-white p-2.5 rounded shadow-sm">
                <Briefcase size={24} strokeWidth={2} />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl text-slate-900 tracking-tight leading-none">MAOHAI IT</span>
                <span className="text-orange-600 font-bold text-sm tracking-widest uppercase">เหมาให้ ไอที</span>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#services" className="text-slate-600 hover:text-blue-900 font-semibold text-sm uppercase tracking-wide transition">{currentT.nav_products}</a>
              <a href="#process" className="text-slate-600 hover:text-blue-900 font-semibold text-sm uppercase tracking-wide transition">{currentT.nav_process}</a>
              <a href="#contact" className="bg-blue-900 text-white px-6 py-2.5 rounded hover:bg-blue-800 transition shadow-md font-semibold text-sm tracking-wide">
                {currentT.nav_quote}
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="text-gray-600 hover:text-blue-900 focus:outline-none">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 shadow-xl absolute w-full">
            <div className="px-4 pt-2 pb-4 space-y-2">
              <a href="#services" className="block px-3 py-3 text-gray-700 hover:bg-blue-50 rounded-md font-medium" onClick={toggleMenu}>{currentT.nav_products}</a>
              <a href="#process" className="block px-3 py-3 text-gray-700 hover:bg-blue-50 rounded-md font-medium" onClick={toggleMenu}>{currentT.nav_process}</a>
              <a href="#contact" className="block px-3 py-3 text-blue-900 font-bold hover:bg-blue-50 rounded-md" onClick={toggleMenu}>{currentT.nav_quote}</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden min-h-[600px] flex items-center">
        {/* Abstract Corporate Background */}
        <div className="absolute inset-0">
             <div className="absolute inset-0 bg-slate-900 opacity-90 z-10"></div>
             <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
                alt="Contractor" 
                className="w-full h-full object-cover grayscale"
             />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full py-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 py-1 px-3 bg-blue-800/50 border border-blue-500/30 rounded backdrop-blur-sm mb-6">
                <UserCheck size={14} className="text-blue-300" />
                <span className="text-blue-100 text-xs font-bold tracking-widest uppercase">{currentT.hero_badge}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 tracking-tight">
              {currentT.hero_title_1} <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-400">
                {currentT.hero_title_2}
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed font-light">
              {currentT.hero_desc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded shadow-lg hover:shadow-orange-500/20 transition text-center flex items-center justify-center uppercase tracking-wide text-sm">
                {currentT.hero_cta_primary}
                <ArrowRight className="ml-2" size={18}/>
              </a>
              <a href="#services" className="px-8 py-4 bg-transparent border border-gray-500 hover:border-white hover:text-white text-gray-300 font-bold rounded transition text-center uppercase tracking-wide text-sm">
                {currentT.hero_cta_secondary}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Statistics Strip */}
      <section className="bg-white border-b border-gray-200 relative z-30 -mt-8 mx-4 md:mx-auto max-w-7xl rounded shadow-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            {[
                { title: currentT.trust_tax, sub: currentT.trust_tax_desc, icon: <ShieldCheck className="text-blue-900" /> },
                { title: currentT.trust_price, sub: currentT.trust_price_desc, icon: <Briefcase className="text-blue-900" /> },
                { title: currentT.trust_delivery, sub: currentT.trust_delivery_desc, icon: <UserCheck className="text-blue-900" /> }
            ].map((item, idx) => (
                <div key={idx} className="p-6 flex items-center space-x-4 bg-white hover:bg-gray-50 transition">
                    <div className="bg-blue-50 p-3 rounded-full">
                        {item.icon}
                    </div>
                    <div>
                        <h3 className="font-bold text-slate-800">{item.title}</h3>
                        <p className="text-sm text-slate-500">{item.sub}</p>
                    </div>
                </div>
            ))}
        </div>
      </section>

      {/* Services Grid - Formal Grid Layout */}
      <section id="services" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{currentT.services_header}</h2>
          <p className="text-lg text-slate-600 font-light">{currentT.services_sub}</p>
          <div className="w-20 h-1 bg-blue-900 mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-gray-200 bg-white shadow-sm">
          {[
              { title: currentT.service_1_title, desc: currentT.service_1_desc, icon: <Monitor /> },
              { title: currentT.service_2_title, desc: currentT.service_2_desc, icon: <Cpu /> },
              { title: currentT.service_3_title, desc: currentT.service_3_desc, icon: <Server /> },
              { title: currentT.service_4_title, desc: currentT.service_4_desc, icon: <Printer /> },
              { title: currentT.service_5_title, desc: currentT.service_5_desc, icon: <Briefcase /> },
              { title: currentT.service_6_title, desc: currentT.service_6_desc, icon: <Building /> }
          ].map((service, index) => (
            <div key={index} className="p-10 border-b md:border-b-0 border-r border-gray-200 hover:bg-blue-50/30 transition group">
              <div className="mb-6 text-blue-900 group-hover:text-orange-600 transition-colors">
                {React.cloneElement(service.icon, { size: 36, strokeWidth: 1.5 })}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="bg-slate-100 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-slate-900 mb-2">{currentT.process_header}</h2>
                <p className="text-slate-600">{currentT.process_sub}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                    { step: "01", title: currentT.step_1, desc: currentT.step_1_desc },
                    { step: "02", title: currentT.step_2, desc: currentT.step_2_desc },
                    { step: "03", title: currentT.step_3, desc: currentT.step_3_desc },
                    { step: "04", title: currentT.step_4, desc: currentT.step_4_desc }
                ].map((item, idx) => (
                    <div key={idx} className="relative bg-white p-8 rounded border-t-4 border-blue-900 shadow-sm hover:shadow-md transition">
                        <span className="absolute top-4 right-4 text-6xl font-bold text-gray-100 -z-1">{item.step}</span>
                        <h3 className="text-lg font-bold text-slate-900 mb-2 relative z-10">{item.title}</h3>
                        <p className="text-sm text-slate-500 relative z-10">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Contact Section - Redesigned */}
      <section id="contact" className="flex flex-col md:flex-row min-h-[600px] shadow-2xl">
        {/* Left Side: Info (Redesigned) */}
        <div className="md:w-5/12 bg-gradient-to-br from-slate-900 to-blue-950 text-white p-8 md:p-12 flex flex-col justify-between relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white opacity-5 rounded-full blur-2xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-blue-500 opacity-5 rounded-full blur-2xl pointer-events-none"></div>

            <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-2 tracking-tight">{currentT.contact_header}</h3>
                <p className="text-blue-200 mb-8 font-light border-l-4 border-orange-500 pl-4">{currentT.contact_sub}</p>
                
                <div className="space-y-6">
                    {/* Phone */}
                    <div className="flex items-start group">
                        <div className="mt-1 w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-orange-400 group-hover:bg-orange-500 group-hover:text-white transition duration-300 flex-shrink-0">
                             <Phone size={20} />
                        </div>
                        <div className="ml-4">
                            <p className="text-xs text-blue-300 uppercase tracking-wider mb-1">{currentT.contact_phone}</p>
                            <p className="text-xl font-bold tracking-wide">065-517-8193</p>
                        </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start group">
                         <div className="mt-1 w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-orange-400 group-hover:bg-orange-500 group-hover:text-white transition duration-300 flex-shrink-0">
                             <Mail size={20} />
                        </div>
                        <div className="ml-4 overflow-hidden">
                            <p className="text-xs text-blue-300 uppercase tracking-wider mb-1">{currentT.contact_email}</p>
                            <p className="text-lg font-medium break-words leading-tight">maohaiit.contact@gmail.com</p>
                        </div>
                    </div>

                    {/* Line ID */}
                    <div className="flex items-start group">
                         <div className="mt-1 w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-orange-400 group-hover:bg-orange-500 group-hover:text-white transition duration-300 flex-shrink-0">
                             <MessageCircle size={20} />
                        </div>
                        <div className="ml-4">
                            <p className="text-xs text-blue-300 uppercase tracking-wider mb-1">{currentT.contact_line}</p>
                            <p className="text-xl font-medium text-green-400">maohaiti</p>
                        </div>
                    </div>

                    {/* Line OA */}
                    <div className="flex items-start group">
                         <div className="mt-1 w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-orange-400 group-hover:bg-orange-500 group-hover:text-white transition duration-300 flex-shrink-0">
                             <div className="font-bold text-sm">OA</div>
                        </div>
                        <div className="ml-4">
                            <p className="text-xs text-blue-300 uppercase tracking-wider mb-1">{currentT.contact_line_oa}</p>
                            <p className="text-xl font-bold text-green-400">@047stjpb</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative z-10 pt-8 mt-8 border-t border-white/10">
                <p className="text-blue-300 text-sm flex items-center">
                    <MapPin size={16} className="mr-2 text-orange-500" />
                    กรุงเทพฯ และปริมณฑล (รับงานทั่วประเทศ)
                </p>
            </div>
        </div>

        {/* Right Side: Form (Redesigned) */}
        <div className="md:w-7/12 bg-white p-8 md:p-16 flex flex-col justify-center">
             <h3 className="text-2xl font-bold text-slate-800 mb-8 pb-2 border-b-2 border-orange-500 w-max">{currentT.form_header}</h3>
             <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative group">
                        <label className="block text-sm font-semibold text-gray-600 mb-2 group-focus-within:text-blue-900 transition-colors">{currentT.form_name}</label>
                        <input name="name" type="text" className="w-full bg-gray-50 border border-gray-200 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900 transition-all shadow-sm group-hover:border-gray-300" placeholder="ระบุชื่อของคุณ" required />
                    </div>
                    <div className="relative group">
                        <label className="block text-sm font-semibold text-gray-600 mb-2 group-focus-within:text-blue-900 transition-colors">{currentT.form_tel}</label>
                        <input name="phone" type="text" className="w-full bg-gray-50 border border-gray-200 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900 transition-all shadow-sm group-hover:border-gray-300" placeholder="08x-xxx-xxxx" required />
                    </div>
                </div>
                <div className="relative group">
                    <label className="block text-sm font-semibold text-gray-600 mb-2 group-focus-within:text-blue-900 transition-colors">{currentT.form_comp}</label>
                    <input name="company" type="text" className="w-full bg-gray-50 border border-gray-200 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900 transition-all shadow-sm group-hover:border-gray-300" placeholder="ระบุชื่อบริษัท/หน่วยงาน (ถ้ามี)" required />
                </div>
                <div className="relative group">
                    <label className="block text-sm font-semibold text-gray-600 mb-2 group-focus-within:text-blue-900 transition-colors">{currentT.form_detail}</label>
                    <textarea name="message" rows="4" className="w-full bg-gray-50 border border-gray-200 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900 transition-all shadow-sm group-hover:border-gray-300 resize-none" placeholder="เช่น ต้องการคอมพิวเตอร์ 10 เครื่อง, อะไหล่..."></textarea>
                </div>
                <button 
                    type="submit" 
                    disabled={formStatus === 'submitting'}
                    className="w-full md:w-auto py-4 px-10 bg-blue-900 hover:bg-blue-800 text-white font-bold tracking-wider text-sm rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                    {formStatus === 'submitting' ? 'กำลังส่งข้อมูล...' : currentT.form_btn}
                </button>
             </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8 text-center">
        <p className="text-xs text-gray-400 uppercase tracking-wider">
             © {new Date().getFullYear()} MaoHai IT Team. {currentT.footer_rights}
        </p>
      </footer>
    </div>
  );
};

export default App;