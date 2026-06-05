package careernavigator;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Placement {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String companyName;
    private String packageOrRole;
    private String status;

    public Placement() {
    }

    public Placement(String companyName, String packageOrRole, String status) {
        this.companyName = companyName;
        this.packageOrRole = packageOrRole;
        this.status = status;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getPackageOrRole() {
        return packageOrRole;
    }

    public void setPackageOrRole(String packageOrRole) {
        this.packageOrRole = packageOrRole;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}