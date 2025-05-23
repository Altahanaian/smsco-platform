
import Head from 'next/head';

export default function ComingSoon() {
  return (
    <>
      <Head>
        <title>SMSCO | Coming Soon</title>
        <meta name="description" content="AI-Powered Consulting & Training Platform" />
      </Head>
      <div style={{
        backgroundColor: '#eaf7ee',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        textAlign: 'center',
        fontFamily: 'sans-serif',
        padding: '2rem'
      }}>
        <img src="/logo.svg" alt="SMSCO Logo" style={{ width: 100, marginBottom: '1rem' }} />
        <h1 style={{ fontSize: '2.5rem', color: '#065f46' }}>COMING SOON</h1>
        <p style={{ fontSize: '1.2rem', marginTop: '1rem' }}>
          AI-Powered Consulting & Training Platform
        </p>
        <p style={{ marginBottom: '2rem' }}>smsco.ai</p>
        <form action="mailto:info@smsco.ai" method="POST" encType="text/plain">
          <input type="text" name="name" placeholder="Full Name" required style={{
            padding: '0.5rem',
            margin: '0.5rem',
            width: '250px'
          }} />
          <input type="email" name="email" placeholder="Email Address" required style={{
            padding: '0.5rem',
            margin: '0.5rem',
            width: '250px'
          }} />
          <select name="serviceType" required style={{
            padding: '0.5rem',
            margin: '0.5rem',
            width: '260px'
          }}>
            <option value="">Select Service Type</option>
            <option value="Company">شركة</option>
            <option value="Institution">مؤسسة</option>
            <option value="Office">مكتب</option>
            <option value="Center">مركز</option>
            <option value="Academy">معهد</option>
            <option value="University">جامعة</option>
          </select>
          <br />
          <button type="submit" style={{
            backgroundColor: '#065f46',
            color: 'white',
            padding: '0.6rem 1.5rem',
            border: 'none',
            borderRadius: '5px',
            marginTop: '1rem',
            cursor: 'pointer'
          }}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
