import pdfMake from 'pdfmake/build/pdfmake'

const convertToPdf = (tasks) => {
  let rowCount = 0
  const data = tasks.map((t) => {
    rowCount = rowCount + 1
    return [rowCount, t.task, t.status]
  })

  const date = `${new Date().getDate()}/${
    new Date().getMonth() + 1
  }/${new Date().getFullYear()}`

  var docDefinition = {
    header: function (currentPage, pageCount, pageSize) {
      return [
        {
          text: `List of TASKS on ${date}`,
          alignment: 'right',
          margin: [50, 10],
        },
      ]
    },
    content: [
      {
        layout: 'lightHorizontalLines',
        table: {
          headerRows: 1,
          widths: [70, 300, '*'],

          body: [
            [
              { text: 'No.', bold: true },
              { text: 'Tasks', bold: true },
              { text: 'Status', bold: true },
            ],
            ...data,
          ],
        },
      },
    ],
  }

  pdfMake.createPdf(docDefinition).open()
}

export default convertToPdf
