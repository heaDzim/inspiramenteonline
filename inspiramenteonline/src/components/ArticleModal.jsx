import React from 'react'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

const ArticleModal = ({ isOpen, onClose, article }) => {
  if (!isOpen || !article) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-background rounded-lg shadow-2xl max-w-4xl max-h-[90vh] overflow-hidden mx-4">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold">{article.title}</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="w-5 h-5" />
          </Button>
        </div>
        
        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          {article.image && (
            <img 
              src={article.image} 
              alt={article.title}
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
          )}
          
          <div className="prose prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticleModal

