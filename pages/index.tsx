import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('common');

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif', textAlign: 'center' }}>
      <h1>{t('welcome')}</h1>
      <p>{t('description')}</p>
      <button style={{ marginTop: '1rem', padding: '0.5rem 1.5rem', background: '#2563eb', color: '#fff', border: 'none', borderRadius: '5px' }}>
        {t('start_now')}
      </button>
    </main>
  );
}