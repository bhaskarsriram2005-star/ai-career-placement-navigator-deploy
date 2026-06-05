package careernavigator;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Certification {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String courseName;
    private String platform;
    private String status;

    public Certification() {
    }

    public Certification(String courseName, String platform, String status) {
        this.courseName = courseName;
        this.platform = platform;
        this.status = status;
    }

    public Long getId() {
        return id;
    }

    public String getCourseName() {
        return courseName;
    }

    public String getPlatform() {
        return platform;
    }

    public String getStatus() {
        return status;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setCourseName(String courseName) {
        this.courseName = courseName;
    }

    public void setPlatform(String platform) {
        this.platform = platform;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}