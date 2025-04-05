package net.javaproject.ems.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import net.javaproject.ems.entity.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long>{

}
