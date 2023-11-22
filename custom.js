$(document).ready(function () {
  // Dummy data for food orders
  var ordersData = [
    { id: 1, foodItem: "Pizza", price: "$12" },
    { id: 2, foodItem: "Burger", price: "$8" },
    { id: 3, foodItem: "biriyani", price: "$28" },
    { id: 4, foodItem: "curry", price: "$20" },
    { id: 5, foodItem: "curry", price: "$20" },
    { id: 6, foodItem: "Pizza", price: "$12" },
    { id: 7, foodItem: "Burger", price: "$8" },
    { id: 8, foodItem: "biriyani", price: "$28" },
    { id: 9, foodItem: "curry", price: "$20" },
    { id: 10, foodItem: "curry", price: "$20" },
    { id: 11, foodItem: "Pizza", price: "$12" },
    { id: 12, foodItem: "Burger", price: "$8" },
    { id: 13, foodItem: "biriyani", price: "$28" },
    { id: 14, foodItem: "curry", price: "$20" },
    { id: 15, foodItem: "curry", price: "$20" },
    { id: 16, foodItem: "Pizza", price: "$12" },
    { id: 17, foodItem: "Burger", price: "$8" },
    { id: 18, foodItem: "biriyani", price: "$28" },
    { id: 19, foodItem: "curry", price: "$20" },
    { id: 20, foodItem: "curry", price: "$20" },
  ];

  // Initialize DataTable
  var table = $("#foodOrdersTable").DataTable({
    data: ordersData,
    columns: [
      { data: "id" },
      { data: "foodItem" },
      { data: "price" },
      {
        data: null,
        render: function (data, type, row) {
          return (
            '<button class="btn btn-info viewDetails" data-id="' +
            row.id +
            '">View Details</button>'
          );
        },
      },
    ],
  });

  // Handle click event for viewing order details
  $("#foodOrdersTable").on("click", ".viewDetails", function () {
    var orderId = $(this).data("id");
    // Fetch order details based on orderId (you can fetch this data from a server/API)
    var orderDetails = getOrderDetails(orderId); // Implement this function

    // Display order details in the modal
    var modalBody = $("#orderDetailsModal .modal-body");
    modalBody.html(
      "<p>Order ID: " +
        orderDetails.id +
        "</p>" +
        "<p>Food Item: " +
        orderDetails.foodItem +
        "</p>" +
        "<p>Price: " +
        orderDetails.price +
        "</p>"
    );

    // Show the modal
    $("#orderDetailsModal").modal("show");
  });

  // Function to fetch order details based on orderId (mock function)
  function getOrderDetails(orderId) {
    // Logic to fetch order details for the given orderId (replace this with your logic)
    return ordersData.find((order) => order.id === orderId);
  }
});
