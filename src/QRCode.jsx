import React, { useState } from 'react'

const QRCode = () => {
  const [url, setUrl] = useState("")
  const [show, setShow] = useState(false);

  const handelSubmit = (e) => {
    e.preventDefault()
    setShow(true);
  }

  return (
    <div style={{
      height: "100vh",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(135deg, #ff9a9e, #fad0c4)"
    }}>

      <div style={{
        width: "400px",
        minHeight: "420px",
        background: "#fff",
        borderRadius: "20px",
        padding: "25px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
        textAlign: "center"
      }}>
        
        <h4 style={{ color: "#ff4d6d", marginBottom: "15px" }}>
          QR Code Generator
        </h4>

        <form onSubmit={handelSubmit}>
          <input 
            type="url" 
            value={url} 
            onChange={(e) => {
              setUrl(e.target.value);
              setShow(false);
            }} 
            placeholder="Enter your URL"
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "10px",
              border: "1px solid #ff6b81",
              marginBottom: "15px",
              outline: "none"
            }}
            required
          />

          <button 
            type="submit"
            style={{
              width: "100%",
              padding: "10px",
              background: "#ff6b81",
              color: "#fff",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer"
            }}
          >
            Generate QR Code
          </button>
        </form>

        {show && (
          <div style={{ marginTop: "20px" }}>
            <img 
              src={`https://quickchart.io/qr?text=${encodeURIComponent(url)}`} 
              alt="qr"
              style={{
                width: "180px",
                height: "180px"
              }}
            />

            <br /><br />

            <a
              href={`https://quickchart.io/qr?text=${encodeURIComponent(url)}`}
              download="qr-code.png"
              style={{
                display: "block",
                background: "#ff6b81",
                color: "#fff",
                padding: "10px",
                borderRadius: "10px",
                textDecoration: "none"
              }}
            >
              Download QR
            </a>
          </div>
        )}

      </div>
    </div>
  )
}

export default QRCode