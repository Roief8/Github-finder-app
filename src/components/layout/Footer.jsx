function Footer() {
  const footerYear = new Date().getFullYear()
  return (
    <footer className="footer p-5 bg-gray-400 text-primary-content footer-center">
      <p>Copyright &copy; {footerYear}</p>
    </footer>
  )
}

export default Footer
