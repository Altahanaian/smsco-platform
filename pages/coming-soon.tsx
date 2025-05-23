
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';

export default function ComingSoon() {
  const { locale } = useRouter();
  const { t } = useTranslation();
  const [direction, setDirection] = useState<'rtl' | 'ltr'>('ltr');

  useEffect(() => {
    setDirection(locale === 'ar' ? 'rtl' : 'ltr');
  }, [locale]);

  return (
    <div style={{
      backgroundImage: 'url("/background.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      direction
    }}>
      <Image src="/logo-smsco.png" alt="SMSCO Logo" width={150} height={150} />
      <h1 style={{ fontSize: '3rem', color: '#014737', marginTop: '1rem' }}>{t('comingSoon')}</h1>
      <p style={{ fontSize: '1.5rem', color: '#014737' }}>{t('platformTitle')}</p>
      <h2 style={{ marginTop: '1rem', fontSize: '1.2rem', color: '#014737' }}>{t('website')}</h2>
    </div>
  );
}
