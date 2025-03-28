package edu.dbms.joinsociety.repositories;

import edu.dbms.joinsociety.models.Customer;
import edu.dbms.joinsociety.models.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderRepository extends JpaRepository<Order, String> {
    List<Order> findOrdersByCustomer(Customer customer);
}
