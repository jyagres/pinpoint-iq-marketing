'use client'
import { useState } from 'react'

export default function DemoForm() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('sent')
        setForm({ name: '', email: '', company: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <div className="text-3xl mb-3">✓</div>
        <p className="text-green-800 font-semibold text-lg">Request received!</p>
        <p className="text-green-600 mt-1">We&apos;ll be in touch within 24 hours.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg text-left space-y-5">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
        <input
          required
          type="text"
          value={form.name}
          onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-600"
          placeholder="James Agres"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
        <input
          required
          type="email"
          value={form.email}
          onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-600"
          placeholder="james@yourfirm.com"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Firm / Company *</label>
        <input
          required
          type="text"
          value={form.company}
          onChange={e => setForm(f => ({ ...f, company: e.target.value }))}
          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-600"
          placeholder="Acme Capital Partners"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">What are you working on? (optional)</label>
        <textarea
          rows={3}
          value={form.message}
          onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-600 resize-none"
          placeholder="We're evaluating HVAC roll-up opportunities in the Southeast..."
        />
      </div>
      {status === 'error' && (
        <p className="text-red-600 text-sm">Something went wrong. Please email us directly at james@2ndststrategy.com</p>
      )}
      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full bg-brand-600 text-white py-3 rounded-lg font-medium hover:bg-brand-700 transition-colors disabled:opacity-50"
      >
        {status === 'sending' ? 'Sending...' : 'Request a Demo'}
      </button>
    </form>
  )
}
