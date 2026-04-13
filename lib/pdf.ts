import jsPDF from "jspdf"

export function generatePDF(items: any[]) {
  const doc = new jsPDF()

  doc.text("Pedido - Safri Comercial", 10, 10)

  let y = 20

  items.forEach((item) => {
    doc.text(
      `${item.name} x${item.quantity} - ${item.price} Kz`,
      10,
      y
    )
    y += 10
  })

  doc.save("pedido.pdf")
}