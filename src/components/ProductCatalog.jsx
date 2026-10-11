import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Layers, 
  Eye, 
  PlusCircle, 
  CheckCircle2, 
  SlidersHorizontal, 
  X,
  FileText
} from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../data/productsData';

export default function ProductCatalog({ onSelectProductForRfq, onOpenRfq }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [inspectingProduct, setInspectingProduct] = useState(null);

  // Filtered products list
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory = 
        selectedCategory === 'all' || product.category === selectedCategory;
      
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch = 
        !query ||
        product.title.toLowerCase().includes(query) ||
        product.material.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.applications.toLowerCase().includes(query) ||
        product.finish.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="products" className="py-20 bg-white relative border-b border-slate-200">
      <div className="container mx-auto px-4">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-cyan-50 text-[#008ba3] border border-cyan-200 mb-4 font-mono shadow-sm">
            <Layers className="w-3.5 h-3.5 text-[#008ba3]" />
            <span>OEM COMPONENT & ASSEMBLY REPERTOIRE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0b1e36] font-heading leading-tight">
            Component & <span className="text-gradient-cyan">Assembly Catalog</span>
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            High-precision stamped parts, silver-brazed electrical jumpers, deep-drawn sleeves, and integrated mechanical sub-assemblies produced at Reliable Industries.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-[#faf8f5] p-5 rounded-2xl border border-slate-200 mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search by part name, copper, stainless steel, plating..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white text-sm text-slate-800 placeholder-slate-400 border border-slate-200 focus:outline-none focus:border-[#008ba3] shadow-sm transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Results count indicator */}
            <div className="text-xs text-slate-500 font-mono w-full md:w-auto text-left md:text-right">
              Showing <span className="text-[#008ba3] font-bold">{filteredProducts.length}</span> of {PRODUCTS.length} production series
            </div>

          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-1 no-scrollbar">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#008ba3] text-white shadow-sm'
                    : 'bg-white text-slate-700 hover:text-[#008ba3] hover:bg-cyan-50 border border-slate-200'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-[#faf8f5] rounded-2xl border border-slate-200">
            <SlidersHorizontal className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-[#0b1e36]">No components matched your search</h3>
            <p className="text-sm text-slate-500 mt-1">Try modifying your keywords or clear your category filter.</p>
            <button
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
              className="mt-4 btn-secondary text-xs py-2 px-4"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="prec-card overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  {/* Product Image Frame */}
                  <div className="relative h-56 bg-slate-50 flex items-center justify-center p-4 overflow-hidden border-b border-slate-100">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    
                    {/* Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-white text-slate-800 border border-slate-200 shadow-sm">
                        {product.badge}
                      </span>
                    </div>

                    {/* Quick View Button */}
                    <button
                      onClick={() => setInspectingProduct(product)}
                      className="absolute bottom-3 right-3 p-2 rounded-lg bg-white text-slate-600 hover:text-white hover:bg-[#008ba3] transition-all shadow-sm cursor-pointer border border-slate-200"
                      title="Inspect Specifications"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Product Content */}
                  <div className="p-5 space-y-3">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-[#008ba3] font-bold">
                      {product.categoryName}
                    </div>

                    <h3 className="text-base font-bold text-[#0b1e36] font-heading group-hover:text-[#008ba3] transition-colors line-clamp-2">
                      {product.title}
                    </h3>

                    <p className="text-xs text-slate-600 line-clamp-2 font-normal">
                      {product.description}
                    </p>

                    {/* Quick Specs Table */}
                    <div className="pt-2 border-t border-slate-100 space-y-1.5 text-xs">
                      <div className="flex items-start justify-between gap-2">
                        <span className="text-slate-500 font-mono text-[11px]">Material:</span>
                        <span className="text-slate-800 font-medium text-right line-clamp-1">{product.material}</span>
                      </div>
                      <div className="flex items-start justify-between gap-2">
                        <span className="text-slate-500 font-mono text-[11px]">Thickness:</span>
                        <span className="text-slate-800 font-medium text-right">{product.thickness}</span>
                      </div>
                      <div className="flex items-start justify-between gap-2">
                        <span className="text-slate-500 font-mono text-[11px]">Finish:</span>
                        <span className="text-[#008ba3] font-semibold text-right line-clamp-1">{product.finish}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="p-4 pt-0 border-t border-slate-100 flex items-center gap-2">
                  <button
                    onClick={() => setInspectingProduct(product)}
                    className="flex-1 py-2 px-3 rounded-lg text-xs font-semibold bg-slate-50 hover:bg-slate-100 text-slate-700 transition-all flex items-center justify-center gap-1.5 cursor-pointer border border-slate-200"
                  >
                    <Eye className="w-3.5 h-3.5 text-slate-500" />
                    <span>Technical Specs</span>
                  </button>

                  <button
                    onClick={() => onSelectProductForRfq(product)}
                    className="flex-1 py-2 px-3 rounded-lg text-xs font-bold bg-[#008ba3] hover:bg-[#00778c] text-white transition-all flex items-center justify-center gap-1.5 shadow-sm cursor-pointer"
                  >
                    <PlusCircle className="w-3.5 h-3.5" />
                    <span>Add to RFQ</span>
                  </button>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>

      {/* Component Detailed Inspection Modal */}
      {inspectingProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-backdrop animate-fade-in">
          <div 
            className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-[#faf8f5]">
              <div>
                <span className="text-[11px] font-mono text-[#008ba3] uppercase tracking-wider font-bold">
                  {inspectingProduct.categoryName}
                </span>
                <h3 className="text-lg font-bold text-[#0b1e36] font-heading mt-0.5">
                  {inspectingProduct.title}
                </h3>
              </div>
              <button
                onClick={() => setInspectingProduct(null)}
                className="p-2 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-200 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6">
              
              {/* Product Photo Showcase */}
              <div className="h-64 rounded-xl bg-slate-50 p-4 flex items-center justify-center border border-slate-200 shadow-inner">
                <img
                  src={inspectingProduct.image}
                  alt={inspectingProduct.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Description */}
              <div>
                <h4 className="text-xs font-bold text-[#0b1e36] uppercase tracking-wider font-mono">
                  Engineering Scope & Manufacturing Details
                </h4>
                <p className="mt-2 text-sm text-slate-700 leading-relaxed font-normal">
                  {inspectingProduct.description}
                </p>
              </div>

              {/* Technical Specifications Grid */}
              <div className="grid grid-cols-2 gap-3 p-4 rounded-xl bg-[#faf8f5] border border-slate-200 text-xs">
                <div>
                  <div className="text-slate-500 font-mono">Material Grades:</div>
                  <div className="text-[#0b1e36] font-bold mt-0.5">{inspectingProduct.material}</div>
                </div>
                <div>
                  <div className="text-slate-500 font-mono">Thickness / Gauge:</div>
                  <div className="text-[#0b1e36] font-bold mt-0.5">{inspectingProduct.thickness}</div>
                </div>
                <div>
                  <div className="text-slate-500 font-mono">Surface Treatment:</div>
                  <div className="text-[#008ba3] font-bold mt-0.5">{inspectingProduct.finish}</div>
                </div>
                <div>
                  <div className="text-slate-500 font-mono">Dimensional Tolerances:</div>
                  <div className="text-emerald-700 font-bold mt-0.5">{inspectingProduct.tolerances}</div>
                </div>
              </div>

              {/* Key Features Bullets */}
              <div>
                <h4 className="text-xs font-bold text-[#0b1e36] uppercase tracking-wider font-mono mb-2">
                  Key Technical Features
                </h4>
                <div className="space-y-1.5">
                  {inspectingProduct.keyFeatures.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-700 font-normal">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#008ba3] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Typical Industrial Applications */}
              <div className="p-4 rounded-xl bg-cyan-50/70 border border-cyan-200">
                <div className="text-xs font-bold text-[#00778c] font-mono uppercase tracking-wider">
                  Typical Industrial Applications:
                </div>
                <div className="text-xs text-slate-800 mt-1 font-medium">
                  {inspectingProduct.applications}
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-slate-100 bg-[#faf8f5] flex items-center justify-between gap-4">
              <button
                onClick={() => setInspectingProduct(null)}
                className="btn-secondary text-xs py-2 px-4"
              >
                Close View
              </button>
              <button
                onClick={() => {
                  onSelectProductForRfq(inspectingProduct);
                  setInspectingProduct(null);
                }}
                className="btn-primary text-xs py-2 px-5 shadow-sm"
              >
                <PlusCircle className="w-4 h-4" />
                <span>Add to RFQ Requisition</span>
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
